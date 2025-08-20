import EasterEggButton from "../EasterEggButton";
import video1 from "~/assets/2.mp4";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      {/* image profile */}
      <img
        src="https://avatars.githubusercontent.com/u/44252635?v=4"
        alt="Profile"
        className="w-[68%] rounded-4xl aspect-square mb-4"
      />

      {/* name and description */}
      <h2 className="text-xl font-bold w-max">Milton M.</h2>
      <p className="mb-4 text-sm">
        Full-Stack Developer <EasterEggButton video={video1} />
      </p>
    </div>
  );
}
