import AccentColorBall from "./AccentColorBall";

export default function ThemeSwitch() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#E67E22",
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold w-max">Themes</h3>

      <div className="flex gap-2">
        {colors.map((color, index) => (
          <AccentColorBall
            key={index}
            color={color}
            onClick={() => {
              document.documentElement.style.setProperty(
                "--accent-color",
                color
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
