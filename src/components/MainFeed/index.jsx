import FeedItem from "./FeedItem";
import FeedTabs from "./FeedTabs";
import feed from "../../data/feed.jsx";
import clsx from "clsx";

export default function MainFeed({
  feedContainerRef,
  setFeedOffsetTopInfo,
  focusedFeedItemId,
  scrollHeight,
  scrollOnTop,
  sectionIndex,
}) {
  const mainFeedClasses = clsx(
    "main-feed-res w-full flex-1 overflow-x-hidden overflow-y-auto flex flex-col p-[3%] pb-0 relative",
    {
      "main-feed-hide": sectionIndex !== 1,
    }
  );

  return (
    <div
      className={mainFeedClasses}
      style={{
        paddingTop: scrollOnTop ? `3%` : "0.4rem",
        scale: 1,
        opacity: 1,
      }}
    >
      <FeedTabs {...{ scrollOnTop }} />

      <div
        ref={feedContainerRef}
        className="overflow-x-hidden overflow-y-auto flex flex-col gap-4 pb-8 relative"
      >
        {feed.map((item, index) => (
          <FeedItem
            key={index}
            {...{
              ...item,
              setFeedOffsetTopInfo,
              focusedFeedItemId,
              scrollHeight,
            }}
          />
        ))}

        <span className="flex w-full justify-center mt-4 text-gray-500 ">
          End of feed
        </span>
      </div>
      <div className="bg-linear-to-t from-white to-transparent w-full h-20 absolute bottom-0 left-0 flex pointer-events-none"></div>
    </div>
  );
}
