import { XIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import news from "~/data/news.jsx";
import ChangelogBodyItem from "./BodyItem";
import ChangelogDots from "./Dots";
import useWhatsNew from "~/hooks/useWhatsNew";
import { useWhatsNewStore } from "~/store/whatsNew";

export default function ChangelogModal() {
  const containerItemsRef = useRef(null);
  const [focusedSection, setFocusedSection] = useState(news[0]);
  const [containerWidth, setContainerWidth] = useState(0);

  const isModalOpen = useWhatsNewStore((state) => state.isModalOpen);
  const dontShowAgain = useWhatsNewStore((state) => state.dontShowAgain);
  const { handleCloseModal, WHATS_NEW_KEY, CURRENT_VERSION } = useWhatsNew();
  const { setIsModalOpen, setDontShowAgain } = useWhatsNewStore.getState();

  const seenVersion = localStorage.getItem(WHATS_NEW_KEY);

  // resize observer in containerItemsRef
  useEffect(() => {
    setContainerWidth(containerItemsRef.current?.offsetWidth || 0);

    if (!containerItemsRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (containerItemsRef.current) {
        setContainerWidth(containerItemsRef.current.offsetWidth);
      }
    });
    resizeObserver.observe(containerItemsRef.current);
    return () => resizeObserver.disconnect();
  }, [containerItemsRef]);

  // open modal if seenVersion is not equal to CURRENT_VERSION
  useEffect(() => {
    if (seenVersion !== CURRENT_VERSION) setIsModalOpen(true);
    setDontShowAgain(seenVersion === CURRENT_VERSION);
  }, [seenVersion]);

  return (
    // container
    <div
      className={`fixed inset-0 bg-black/40 flex z-50 p-4`}
      style={{
        opacity: isModalOpen ? 1 : 0,
        left: isModalOpen ? 0 : "100%",
        transition: isModalOpen
          ? `opacity 0.3s ease-in-out, left 0s 0s`
          : `opacity 0.3s ease-in-out, left 0s 0.3s`,
        pointerEvents: isModalOpen ? "auto" : "none",
      }}
    >
      {/* modal */}
      <div className="w-full max-w-[40rem] h-max bg-[var(--background1)] flex flex-col m-auto rounded-2xl overflow-hidden shadow-lg border border-black/40">
        {/* header */}
        <div className="flex justify-between items-center border-b border-black/10 relative">
          <div
            className="flex cursor-pointer h-10 px-4 items-center hover:bg-black/10 hover:font-bold active:pt-1"
            onClick={handleCloseModal}
          >
            <XIcon size={16} color="var(--text3)" />
          </div>
          <h2 className="text-base font-bold absolute left-1/2 -translate-x-1/2 text-[var(--text2)]">
            What's New
          </h2>
          <span
            className="flex text-sm cursor-pointer h-10 px-4 items-center font-bold text-black/50 hover:bg-black/10 hover:text-[var(--accent-color1)] active:pt-1"
            onClick={() => {
              const currentIndex = news.indexOf(focusedSection);
              const nextIndex = (currentIndex + 1) % news.length;
              setFocusedSection(news[nextIndex]);
            }}
          >
            Next
          </span>
        </div>

        {/* body */}
        <div
          ref={containerItemsRef}
          className="flex bg-[var(--background2)] w-full relative h-screen max-h-[30rem]"
        >
          <div
            className="flex absolute h-full w-max"
            style={{
              left: `-${news.indexOf(focusedSection) * containerWidth}px`,
              transition: "left 0.3s cubic-bezier(.57,.01,.27,1)",
            }}
          >
            {news.map((item, index) => (
              <ChangelogBodyItem
                key={index}
                data={item}
                containerWidth={containerWidth}
              />
            ))}
          </div>

          <ChangelogDots
            total={news.length}
            current={news.indexOf(focusedSection)}
            onDotClick={(index) => setFocusedSection(news[index])}
          />

          {/* do not show again btn */}
          <div className="flex absolute bottom-2 left-3 gap-2">
            <input
              type="checkbox"
              id="dont-show-again-whats-new"
              className="accent-[var(--accent-color1)]"
              checked={dontShowAgain}
              onChange={(e) => {
                setDontShowAgain(e.target.checked);
              }}
            />
            <label
              htmlFor="dont-show-again-whats-new"
              className="text-sm text-[var(--text3)] select-none cursor-pointer"
            >
              Don't show this again
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
