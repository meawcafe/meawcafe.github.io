import { ArrowSquareOutIcon, IconContext } from "@phosphor-icons/react";

export default function ContactButton({ icon, text, href }) {
  return (
    <div
      className="flex gap-2 cursor-pointer items-center relative"
      onClick={() => window.open(href, "_blank")}
    >
      <ArrowSquareOutIcon
        className="text-[var(--accent-color1)] text-lg"
        weight="thin"
      />

      <div
        className="flex w-full gap-2 left-0 hover:left-6 text-gray-600 hover:text-[var(--accent-color1)] absolute bg-[var(--background2)]"
        style={{
          transition: "200ms cubic-bezier(.57,.01,.27,1)",
        }}
      >
        <IconContext.Provider
          value={{
            size: "1.5em",
            weight: "regular",
          }}
        >
          {icon}
        </IconContext.Provider>

        <span className="text-base font-semibold">{text}</span>
      </div>
    </div>
  );
}
