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
