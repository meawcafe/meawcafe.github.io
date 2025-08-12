import {
  ArrowLineLeftIcon,
  ArrowLineRightIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useTouchStore } from "../../store/touch";

export default function TouchNavHelper() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);
  const touchPositionY = useTouchStore((state) => state.touchPositionY);
  const showNavHelperLeft = useTouchStore((state) => state.showNavHelperLeft);
  const showNavHelperRight = useTouchStore((state) => state.showNavHelperRight);

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
        {showNavHelperLeft && sectionIndex === 0 ? (
          <XIcon size={50} weight="bold" color="red" />
        ) : (
          <ArrowLineRightIcon
            size={50}
            weight="bold"
            color="var(--accent-color1)"
          />
        )}
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
        {showNavHelperRight && sectionIndex === 2 ? (
          <XIcon size={50} weight="bold" color="red" />
        ) : (
          <ArrowLineLeftIcon
            size={50}
            weight="bold"
            color="var(--accent-color1)"
          />
        )}
      </div>
    </>
  );
}
