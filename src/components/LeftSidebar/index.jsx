import clsx from "clsx";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useTouchStore } from "~/store/touch";

export default function LeftSidebar() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);

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
      <Profile />
      <Navbar />
    </div>
  );
}
