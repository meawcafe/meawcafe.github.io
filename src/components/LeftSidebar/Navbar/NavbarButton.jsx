import { IconContext } from "@phosphor-icons/react";

export default function NavbarButton({
  icon,
  label,
  buttonId,
  focusedFeedItemId,
}) {
  function handleClick() {
    // Logic to handle click event, e.g., scroll to the section
    document.getElementById(buttonId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <button
      className="flex items-center w-full gap-2 p-2 rounded-2xl transition-colors hover:bg-[var(--background3)]"
      style={{
        backgroundColor: focusedFeedItemId == buttonId && "var(--text1)",
        color:
          focusedFeedItemId == buttonId
            ? "var(--reverse-text1)"
            : "var(--text1)",
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
        className="text-sm"
        style={{
          fontWeight: focusedFeedItemId == buttonId ? "bold" : "normal",
        }}
      >
        {label}
      </span>
    </button>
  );
}
