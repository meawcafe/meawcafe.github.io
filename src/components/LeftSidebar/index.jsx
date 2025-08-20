import clsx from "clsx";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useTouchStore } from "~/store/touch";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function LeftSidebar() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);
  const { setSectionIndex } = useTouchStore.getState();

  const leftSidebarClasses = clsx(
    "left-sidebar-res w-[16rem] p-[3%] pr-0 flex flex-col",
    {
      "left-sidebar-hide": sectionIndex !== 0,
    }
  );

  return (
    <div
      className={leftSidebarClasses}
      style={{
        right: 0,
        scale: 1,
      }}
    >
      <div
        className="anin-on-press only-show-on-md gap-2 items-center absolute top-4 right-4 text-[var(--accent-color1)] cursor-pointer bg-[var(--background2)] py-2 pl-5 pr-3 rounded-full"
        style={{
          display: "none",
        }}
        onClick={() => setSectionIndex(1)}
      >
        <span>back</span>
        <ArrowRightIcon size={22} weight="thin" />
      </div>

      <Profile />
      <Navbar />
    </div>
  );
}
