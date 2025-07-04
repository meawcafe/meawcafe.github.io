import { useState } from "react";

export default function InteractionItem({
  icon: Icon,
  count,
  checkedColor,
  enableInteraction = false,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`flex items-center text-sm gap-1 cursor-pointer text-[var(--text3)] hover:text-[var(--text1)] duration-200 active:scale-120`}
      onClick={() => {
        if (!enableInteraction) return;
        setIsChecked(!isChecked);
      }}
      style={{ color: isChecked && checkedColor }}
    >
      <Icon size={20} weight={isChecked ? "fill" : "regular"} />
      {count && <span>{isChecked ? count + 1 : count}</span>}
    </div>
  );
}
