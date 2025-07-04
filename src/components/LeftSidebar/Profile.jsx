import cat_img from "../../assets/cat.jpeg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      {/* image profile */}
      <img
        src={cat_img}
        alt="Profile"
        className="w-[68%] rounded-4xl aspect-square mb-4"
      />

      {/* name and description */}
      <h2 className="text-xl font-bold w-max">Milton M</h2>
      <p className="mb-4 text-sm">Web Developer</p>
    </div>
  );
}
