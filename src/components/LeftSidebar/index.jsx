import clsx from "clsx";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function LeftSidebar({ focusedFeedItemId, sectionIndex }) {
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
      <Navbar {...{ focusedFeedItemId }} />
    </div>
  );
}
