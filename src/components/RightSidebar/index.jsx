import clsx from "clsx";
import { useTouchStore } from "~/store/touch";
import ViewsCounter from "./ViewsCounter";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import ContactSection from "./Contact";
// import ThemeSwitch from "./ThemeSwitch";

export default function RightSidebar() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);
  const { setSectionIndex } = useTouchStore.getState();

  const rightSidebarClasses = clsx(
    "right-sidebar-res w-[16rem] p-[3%] pl-0 flex flex-col gap-8",
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
      <div
        className="anin-on-press only-show-on-md gap-2 items-center absolute top-4 right-4 text-[var(--accent-color1)] cursor-pointer bg-[var(--background2)] py-2 pl-3 pr-4 rounded-full"
        style={{
          display: "none",
        }}
        onClick={() => setSectionIndex(1)}
      >
        <ArrowLeftIcon size={22} weight="thin" />
        <span>back</span>
      </div>

      <ViewsCounter />
      {/* <ThemeSwitch /> */}
      <ContactSection />
    </div>
  );
}
