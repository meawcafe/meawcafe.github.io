import { useScrollStore } from "../../store/scroll";

export default function FeedTabs() {
  const scrollOnTop = useScrollStore((state) => state.scrollOnTop);

  return (
    <div
      className="w-full h-min flex text-sm items-center justify-between select-none pr-[1rem]"
      style={{
        paddingBottom: scrollOnTop ? "1rem" : "0.4rem",
        transition: "200ms cubic-bezier(.57,.01,.27,1)",
      }}
    >
      <span className="text-base cursor-pointer font-bold">Recents</span>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:font-bold">Following</span>
        <span className="cursor-pointer hover:font-bold">Popular</span>
      </div>
    </div>
  );
}
