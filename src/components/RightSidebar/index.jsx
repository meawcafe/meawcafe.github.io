import clsx from "clsx";
import { useTouchStore } from "~/store/touch";
import ViewsCounter from "./ViewsCounter";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import ContactSection from "./Contact";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { useWhatsNewStore } from "~/store/whatsNew";
// import ThemeSwitch from "./ThemeSwitch";

export default function RightSidebar() {
  const sectionIndex = useTouchStore((state) => state.sectionIndex);
  const { setSectionIndex } = useTouchStore.getState();
  const { setIsModalOpen } = useWhatsNewStore.getState();

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

      {/* show whats new again */}
      <div
        className="anin-on-press gap-2 items-center text-[var(--text3)] hover:text-[var(--accent-color1)] cursor-pointer hover:bg-[var(--background1)] py-2 hover:pl-3 pr-4 rounded-full"
        style={{
          transition: "padding-left 0.2s, border 0.4s, background-color 0.2s",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <InfoIcon size={"1.5em"} />
        <span className="text-base font-semibold">What's New</span>
      </div>
    </div>
  );
}
