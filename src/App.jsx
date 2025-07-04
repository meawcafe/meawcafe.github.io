import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";
import RightSidebar from "./components/RightSidebar";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const feedContainerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [feedOffsetTopInfo, setFeedOffsetTopInfo] = useState({
    "about-me": null,
    education: null,
    "work-experience": null,
    skills: null,
    projects: null,
    // contact: null,
  });
  const [focusedFeedItemId, setFocusedFeedItemId] = useState("about-me");

  const handleScroll = () => {
    const container = feedContainerRef.current;
    const scrollTop = container.scrollTop;

    // compare the scrollTop with the offsetTop of each section
    const visibleSection = Object.entries(feedOffsetTopInfo).reduce(
      (closest, [key, data]) => {
        const offsetTop = data.offsetTopSize;
        const distance = Math.abs(scrollTop - offsetTop);
        return distance < closest.distance ? { key, distance } : closest;
      },
      { key: null, distance: Infinity }
    );

    setFocusedFeedItemId(visibleSection.key);
    setScrollHeight(container.scrollHeight - container.clientHeight);
  };

  useEffect(() => {
    const container = feedContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [feedOffsetTopInfo]);

  return (
    <div className="w-screen h-screen flex relative justify-center overflow-hidden">
      <div className="flex w-full max-w-[1280px]">
        <LeftSidebar {...{ focusedFeedItemId }} />
        <MainFeed
          {...{
            feedContainerRef,
            setFeedOffsetTopInfo,
            focusedFeedItemId,
            scrollHeight,
          }}
        />
        <RightSidebar />
      </div>
    </div>
  );
}
