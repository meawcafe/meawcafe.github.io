import Navbar from "./Navbar";
import Profile from "./Profile";

export default function LeftSidebar({ focusedFeedItemId }) {
  return (
    <div className="w-[16rem] p-[3%] pr-0 flex flex-col">
      <Profile />
      <Navbar {...{ focusedFeedItemId }} />
    </div>
  );
}
