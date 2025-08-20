export default function EasterEggButton({ video }) {
  const handleClick = () => {
    // delete all site
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.flexDirection = "column";
    document.body.style.textAlign = "center";
    document.body.style.color = "yellow";
    document.body.style.fontFamily = "monospace";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.innerHTML = `
    <video loop onloadstart="this.volume=0.8; this.play();" style="display: block; padding: 0 20px 0 20px">
    <source src="${video}" type="video/mp4">
    </video>
    <h1 style="font-size: 2rem">Session Terminated</h1>
    `;
  };
  return (
    <span className="text-lg cursor-pointer" onClick={handleClick}>
      ✨
    </span>
  );
}
