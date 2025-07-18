import { ArrowLineLeftIcon, ArrowLineRightIcon } from "@phosphor-icons/react";

export default function TouchNavHelper({
  touchPositionY,
  showNavHelperLeft,
  showNavHelperRight,
}) {
  return (
    <>
      <div
        className="absolute w-max left-0 flex bg-white/40 z-30 p-6 rounded-full backdrop-blur-sm"
        style={{
          top: touchPositionY,
          left: showNavHelperLeft ? "2rem" : "-5rem",
          opacity: showNavHelperLeft ? 1 : 0,
          scale: showNavHelperLeft ? 1 : 0,
          transition:
            "left 300ms cubic-bezier(.26,.01,0,1.59), opacity 300ms cubic-bezier(.26,.01,0,1.59), scale 300ms cubic-bezier(.26,.01,0,1.59), top 500ms ease",
        }}
      >
        <ArrowLineRightIcon
          size={50}
          weight="bold"
          color="var(--accent-color1)"
        />
      </div>

      <div
        className="absolute w-max right-0 flex bg-white/40 z-30 p-6 rounded-full backdrop-blur-sm"
        style={{
          top: touchPositionY,
          right: showNavHelperRight ? "2rem" : "-5rem",
          opacity: showNavHelperRight ? 1 : 0,
          scale: showNavHelperRight ? 1 : 0,
          transition:
            "right 300ms cubic-bezier(.26,.01,0,1.59), opacity 300ms cubic-bezier(.26,.01,0,1.59), scale 300ms cubic-bezier(.26,.01,0,1.59), top 500ms ease",
        }}
      >
        <ArrowLineLeftIcon
          size={50}
          weight="bold"
          color="var(--accent-color1)"
        />
      </div>
    </>
  );
}
