export default function FeedTabs() {
  return (
    <div className="w-full h-min flex text-sm items-center justify-between mb-4 bg-[var(--background1)]">
      <span className="text-base cursor-pointer font-bold">Recents</span>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:font-bold">Following</span>
        <span className="cursor-pointer hover:font-bold">Popular</span>
      </div>
    </div>
  );
}
