import { DotsThreeOutlineIcon } from "@phosphor-icons/react";

export default function ItemHeader({ name, at, avatar, timestamp }) {
  return (
    <div className="w-full flex gap-3">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-[3.4rem] rounded-xl aspect-square object-cover block"
      />

      <div className="w-full flex flex-col">
        <div className="w-full flex gap-2 items-center justify-between">
          <div className="flex gap-2">
            <span className="font-bold">{name}</span>·<span>{at}</span>
          </div>
          <span className="hover:cursor-pointer">
            <DotsThreeOutlineIcon size={24} />
          </span>
        </div>
        <span className="text-sm">{timestamp}</span>
      </div>
    </div>
  );
}
