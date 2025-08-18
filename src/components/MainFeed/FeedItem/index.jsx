import { useEffect, useRef, useState } from "react";
import { ArrowBendRightDownIcon } from "@phosphor-icons/react";
import { useOverflowStore } from "./feedOverflowStore";
import { useScrollStore } from "~/store/scroll";
import ItemHeader from "./ItemHeader";
import Lightbox from "./Lightbox";
import SocialInteractions from "./SocialInteractions";

export default function FeedItem({
  section_id,
  user,
  timestamp,
  content,
  media = null,
  social_info,
  overflow = false,
}) {
  const { setFeedOffsetTopInfo } = useScrollStore.getState();
  const feedItemRef = useRef(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isOverflow, setIsOverflow] = useState(overflow);
  let windowResizeTimeout = null;

  const overflowMap = useOverflowStore((state) => state.overflowMap);
  const { setOverflow } = useOverflowStore.getState();

  const handleOverflowChange = (boolean) => {
    setOverflow(section_id, boolean);
    setIsOverflow(boolean);
  };

  const updateThisOffsetTop = () => {
    if (feedItemRef.current) {
      setFeedOffsetTopInfo((prev) => ({
        ...prev,
        [section_id]: {
          element: feedItemRef.current,
          offsetTopSize: feedItemRef.current.offsetTop,
        },
      }));
    }
  };

  const windowResizeHandler = () => {
    if (windowResizeTimeout) {
      clearTimeout(windowResizeTimeout);
    }

    windowResizeTimeout = setTimeout(() => {
      updateThisOffsetTop();
    }, 1000);
  };

  useEffect(() => {
    updateThisOffsetTop();
    handleOverflowChange(overflow);

    window.addEventListener("resize", windowResizeHandler);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  // update this.offsetTop when overflowMap changes
  useEffect(() => {
    updateThisOffsetTop();
  }, [overflowMap, section_id]);

  return (
    <>
      {media && (
        <Lightbox
          onClose={() => setIsLightboxOpen(false)}
          {...{ media, user, timestamp, social_info, isLightboxOpen }}
        />
      )}
      <div
        id={section_id}
        ref={feedItemRef}
        className="flex flex-col p-4 rounded-2xl bg-[var(--background1)]"
      >
        <ItemHeader {...user} timestamp={timestamp} />

        <div
          className="flex flex-col relative items-center"
          style={{
            maxHeight: isOverflow ? "8rem" : "100%",
            transition: "200ms cubic-bezier(.57,.01,.27,1)",
          }}
        >
          {/* content */}
          <span
            className="text-gray-800 text-base mt-4 break-words overflow-hidden pb-4 w-full"
            style={{
              gap: "0.5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {content}
          </span>

          {/* limit 5 lines */}
          {overflow && (
            <>
              <div
                className="w-full h-20 absolute bottom-0 left-0 flex pointer-events-none"
                style={{
                  background: isOverflow
                    ? "linear-gradient(to top, var(--background1) 4%, rgba(255, 255, 255, 0))"
                    : "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                }}
              ></div>
              <span
                className="flex text-[0.9rem] gap-1 mt-4 text-blue-500 z-10 cursor-pointer absolute hover:font-bold bottom-[-0.6rem] select-none"
                onClick={() => handleOverflowChange(!isOverflow)}
              >
                {isOverflow && "Show more"}
                <ArrowBendRightDownIcon
                  size={20}
                  weight="fill"
                  style={{
                    transform: isOverflow ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
                {!isOverflow && "Show less"}
              </span>
            </>
          )}
        </div>

        {/* media */}
        {media && (
          <div
            className="mt-4 flex flex-wrap gap-1 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            {media.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden grow w-[12rem] max-h-[10rem]"
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* social interactions */}
        <SocialInteractions {...social_info} />
      </div>
    </>
  );
}
