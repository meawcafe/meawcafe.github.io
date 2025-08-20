import { DotsThreeOutlineIcon } from "@phosphor-icons/react";
import SocialInteractions from "../SocialInteractions";
import responsive from "./responsive.module.css";

export default function FeedDetails({
  user,
  timestamp,
  media,
  social_info,
  selectedMedia,
  setSelectedMedia,
  selectedMediaIndex,
  setSelectedMediaIndex,
}) {
  const changeSelectedMedia = (index) => {
    setSelectedMedia(media[index]);
    setSelectedMediaIndex(index);
  };

  return (
    <div className="flex flex-col h-full overflow-y-hidden">
      <div className="w-full flex gap-3">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-[3.4rem] rounded-xl aspect-square object-cover block"
        />

        <div className="w-full flex flex-col">
          <div className="w-full flex gap-2 items-center justify-between">
            <div className="flex gap-2">
              <span className="font-bold">{user.name}</span>·
              <span>{user.at}</span>
            </div>
            <span className="hover:cursor-pointer anin-on-press">
              <DotsThreeOutlineIcon size={24} />
            </span>
          </div>
          <span className="text-sm">{timestamp}</span>
        </div>
      </div>
      <span className="text-gray-800 text-[0.9rem] mt-4">
        <b>{selectedMedia.title}:</b> {selectedMedia.details}
      </span>

      <SocialInteractions {...social_info} />

      {/* <span className="text-gray-600 text-base mt-4"> */}
      <span
        className={`text-gray-600 text-base mt-4 ${responsive.galleryTitle}`}
      >
        Gallery
      </span>
      <div
        className={`flex flex-wrap gap-1 select-none overflow-x-hidden overflow-y-auto ${responsive.galleryTitle}`}
      >
        {media.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden grow w-[8rem] max-h-[6rem] cursor-pointer"
            onClick={() => changeSelectedMedia(index)}
            style={{
              border:
                index === selectedMediaIndex ? "2px solid #4f46e5" : "none",
            }}
          >
            <img
              src={item.type === "image" ? item.url : item.thumbnail}
              alt={item.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
