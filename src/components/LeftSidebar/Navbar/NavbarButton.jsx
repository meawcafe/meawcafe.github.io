import { IconContext } from "@phosphor-icons/react";
import { useScrollStore } from "../../../store/scroll";
import { useTouchStore } from "../../../store/touch";

export default function NavbarButton({ icon, label, buttonId }) {
  const focusedFeedItemId = useScrollStore((state) => state.focusedFeedItemId);
  const feedContainerRef = useScrollStore((state) => state.feedContainerRef);

  const { setSectionIndex } = useTouchStore.getState();

  function handleClick() {
    setSectionIndex(1);
    const target = feedContainerRef.current.querySelector(`#${buttonId}`);
    feedContainerRef.current.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
    // document.getElementById(buttonId)?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  }

  return (
    <button
      className="flex items-center w-full gap-2 p-2 rounded-2xl"
      style={{
        backgroundColor: focusedFeedItemId == buttonId && "var(--text1)",
        color:
          focusedFeedItemId == buttonId
            ? "var(--reverse-text1)"
            : "var(--text1)",
        margin: focusedFeedItemId == buttonId ? "0.6rem 0" : "0",
        transition: "200ms 300ms cubic-bezier(.57,.01,.27,1)",
      }}
      onClick={handleClick}
    >
      <IconContext.Provider
        value={{
          size: "1.5em",
          weight: focusedFeedItemId == buttonId ? "fill" : "regular",
        }}
      >
        {icon}
      </IconContext.Provider>

      <span
        className="text-sm select-none"
        style={{
          fontWeight: focusedFeedItemId == buttonId ? "bold" : "normal",
        }}
      >
        {label}
      </span>
    </button>
  );
}
