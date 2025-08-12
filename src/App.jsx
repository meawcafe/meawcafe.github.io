import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";
import RightSidebar from "./components/RightSidebar";
import { useRef, useEffect } from "react";
import TouchNavHelper from "./components/TouchNavHelper";
import { useTouchNavigation } from "./hooks/useTouchNavigation";
import useFeedScrollTracker from "./hooks/useFeedScrollTracker";
import { useScrollStore } from "./store/scroll";

export default function App() {
  const { handleTouchStart, handleTouchEnd, handleTouchMove } =
    useTouchNavigation();

  const feedContainerRef = useScrollStore((state) => state.feedContainerRef);
  const feedOffsetTopInfo = useScrollStore((state) => state.feedOffsetTopInfo);

  const { handleScroll } = useFeedScrollTracker({
    feedContainerRef,
  });

  useEffect(() => {
    if (!feedContainerRef) return;

    const container = feedContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    // cleanup when component unmounts
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [feedOffsetTopInfo, feedContainerRef]);

  return (
    <div className="w-screen h-screen flex relative justify-center overflow-hidden bg-[var(--background2)]">
      <div
        className="flex w-full max-w-[1280px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>

      <TouchNavHelper />
    </div>
  );
}
