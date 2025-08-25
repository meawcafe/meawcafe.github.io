export default function ChangelogDots({ total, current, onDotClick }) {
  return (
    <div className="flex absolute bottom-3 right-3 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`h-4 rounded-full transition-all hover:scale-120 cursor-pointer`}
          style={{
            width: index === current ? "1.8rem" : "1rem",
            backgroundColor:
              index === current
                ? "var(--accent-color2)"
                : "var(--reverse-text3)",
            borderColor:
              index === current ? "var(--accent-color2)" : "var(--text5)",
            borderWidth: "1px",
          }}
          onClick={() => onDotClick(index)}
        ></span>
      ))}
    </div>
  );
}
