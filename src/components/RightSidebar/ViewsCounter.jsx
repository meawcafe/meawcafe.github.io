import EasterEggButton from "../EasterEggButton";
import video1 from "~/assets/2.mp4";

export default function ViewsCounter() {
  return (
    <div className="flex flex-col relative gap-4">
      <h3 className="text-xl font-bold w-max">
        Views Counter <EasterEggButton video={video1} />
      </h3>

      {/* Imagem da sombra (segunda imagem, transformada) */}
      <img
        src="https://count.getloli.com/get/@meawcafe?theme=rule34&padding=6&pixelated=1&darkmode=0"
        alt="Shadow of Views Counter"
        className="absolute left-0 bottom-0 w-full h-auto pointer-events-none"
        style={{
          transform: "perspective(200px) rotateX(50deg) scaleY(0.7)",
          transformOrigin: "bottom",
          opacity: 0.3,
          zIndex: 0,
          filter: "brightness(0) saturate(100%) blur(1px)",
        }}
      />

      {/* Imagem principal */}
      <img
        src="https://count.getloli.com/get/@meawcafe?theme=rule34&padding=6&pixelated=1&darkmode=0"
        alt="Views Counter"
        className="w-full h-auto relative z-10"
      />
    </div>
  );
}
