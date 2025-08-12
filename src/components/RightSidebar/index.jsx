import clsx from "clsx";
import Stories from "./Stories";
import ViewsCounter from "./ViewsCounter";
import { useTouchStore } from "../../store/touch";

export default function RightSidebar() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);

  const rightSidebarClasses = clsx(
    "right-sidebar-res w-[16rem] p-[3%] pl-0 flex flex-col gap-4",
    {
      "right-sidebar-hide": sectionIndex !== 2,
    }
  );

  return (
    <div
      className={rightSidebarClasses}
      style={{
        left: 0,
        scale: 1,
      }}
    >
      <ViewsCounter />
      <Stories />
    </div>
  );
}
