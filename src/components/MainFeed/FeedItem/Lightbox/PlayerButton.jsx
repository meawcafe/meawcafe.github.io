import { IconContext } from "@phosphor-icons/react";

export default function PlayerButton({
  top,
  left,
  right,
  transform,
  icon,
  onClick,
}) {
  return (
    <span
      className="anin-on-press absolute bg-black/50 p-2 rounded-full cursor-pointer border border-white/50"
      style={{ top, left, right, transform }}
      onClick={onClick}
    >
      {/* <ArrowLeftIcon size={18} color="white" weight="bold" /> */}
      <IconContext.Provider
        value={{
          size: 18,
          weight: "bold",
          color: "white",
        }}
      >
        {icon}
      </IconContext.Provider>
    </span>
  );
}
