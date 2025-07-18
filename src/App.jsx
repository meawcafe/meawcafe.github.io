import { ArrowLineLeftIcon, ArrowLineRightIcon } from "@phosphor-icons/react";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";
import RightSidebar from "./components/RightSidebar";
import { useRef, useState, useEffect } from "react";
import TouchNavHelper from "./components/TouchNavHelper";

export default function App() {
  // touch events
  const [sectionIndex, setSectionIndex] = useState(1);
  const [touchPositionY, setTouchPositionY] = useState(0);
  const [showNavHelperLeft, setShowNavHelperLeft] = useState(false);
  const [showNavHelperRight, setShowNavHelperRight] = useState(false);

  const feedContainerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [feedOffsetTopInfo, setFeedOffsetTopInfo] = useState({
    "about-me": null,
    education: null,
    "work-experience": null,
    skills: null,
    projects: null,
    "contact-me": null,
  });
  const [focusedFeedItemId, setFocusedFeedItemId] = useState("about-me");

  const handleScroll = () => {
    const container = feedContainerRef.current;
    const scrollTop = container.scrollTop;

    // Update scrollOnTop state based on scroll position
    setScrollOnTop(scrollTop < 15);

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

  //

  // Touch Events
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndRef.current = event.changedTouches[0].clientX;
    const dragDistance = touchEndRef.current - touchStartRef.current;

    setShowNavHelperLeft(false);
    setShowNavHelperRight(false);

    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) {
        if (sectionIndex - 1 < 0) return;
        setSectionIndex(sectionIndex - 1);
      } else {
        if (sectionIndex + 1 > 2) return;
        setSectionIndex(sectionIndex + 1);
      }
    }
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const deltaX = currentX - touchStartRef.current;

    // Calcula o centro vertical da tela
    const windowHeight = window.innerHeight - 200;
    const centerY = windowHeight / 2;

    // Calcula um deslocamento suave baseado no movimento vertical
    const offsetY = (currentY - centerY) * 0.1; // Multiplicador 0.1 para movimento sutil
    setTouchPositionY(Math.floor(centerY + offsetY)); // Centraliza e adiciona deslocamento

    if (Math.abs(deltaX) > 100) {
      if (deltaX > 0) {
        setShowNavHelperLeft(true);
        setShowNavHelperRight(false);
        console.log("left");
      } else {
        setShowNavHelperRight(true);
        setShowNavHelperLeft(false);
        console.log("right");
      }
    } else {
      setShowNavHelperLeft(false);
      setShowNavHelperRight(false);
    }
  };

  return (
    <div className="w-screen h-screen flex relative justify-center overflow-hidden bg-[var(--background2)]">
      <div
        className="flex w-full max-w-[1280px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <LeftSidebar {...{ focusedFeedItemId, sectionIndex }} />
        <MainFeed
          {...{
            feedContainerRef,
            setFeedOffsetTopInfo,
            focusedFeedItemId,
            scrollHeight,
            scrollOnTop,
            sectionIndex,
          }}
        />
        <RightSidebar {...{ sectionIndex }} />
      </div>

      {/* Touch nav helper */}
      <TouchNavHelper
        {...{ touchPositionY, showNavHelperLeft, showNavHelperRight }}
      />
    </div>
  );
}
