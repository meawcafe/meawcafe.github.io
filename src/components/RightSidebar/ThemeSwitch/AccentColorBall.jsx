export default function AccentColorBall({ color, onClick }) {
  return (
    <div
      className="anin-on-press w-6 h-6 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}
