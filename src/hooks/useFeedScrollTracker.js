import { useScrollStore } from "../store/scroll";

const MIN_SCROLL_TOP = 15;

export default function useFeedScrollTracker({ feedContainerRef }) {
  const feedOffsetTopInfo = useScrollStore((state) => state.feedOffsetTopInfo);
  const { setScrollHeight, setScrollOnTop, setFocusedFeedItemId } =
    useScrollStore.getState();

  const handleScroll = () => {
    const container = feedContainerRef.current;
    const scrollTop = container.scrollTop;

    // update scrollOnTop state based on scroll position
    setScrollOnTop(scrollTop < MIN_SCROLL_TOP);

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

  return { handleScroll };
}
