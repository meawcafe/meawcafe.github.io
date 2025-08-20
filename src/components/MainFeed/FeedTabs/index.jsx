import { ListHeartIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useScrollStore } from "~/store/scroll";
import { useTouchStore } from "~/store/touch";
// import responsive from "./responsive.module.css";

export default function FeedTabs() {
  const scrollOnTop = useScrollStore((state) => state.scrollOnTop);
  const { setSectionIndex } = useTouchStore.getState();

  const iconClasses = clsx(
    "anin-on-press w-8 rounded-4xl aspect-square only-show-on-md hidden",
    {
      "w-10": scrollOnTop,
    }
  );

  return (
    <div
      className="w-full h-min flex text-sm items-center justify-between select-none pr-[1rem]"
      style={{
        paddingBottom: scrollOnTop ? "1rem" : "0.4rem",
        transition: "200ms cubic-bezier(.57,.01,.27,1)",
      }}
    >
      {/* open left sidebar */}
      <img
        src="https://avatars.githubusercontent.com/u/44252635?v=4"
        alt="Profile"
        className={iconClasses}
        style={{
          transition: "200ms cubic-bezier(.57,.01,.27,1)",
        }}
        onClick={() => setSectionIndex(0)}
      />

      <span className="text-base cursor-pointer font-bold">Recents</span>

      {/* open right sidebar */}
      <ListHeartIcon
        className={iconClasses}
        size={scrollOnTop ? "2rem" : "1.7rem"}
        weight="regular"
        onClick={() => setSectionIndex(2)}
        style={{
          transition: "200ms cubic-bezier(.57,.01,.27,1)",
        }}
      />
    </div>
  );
}
