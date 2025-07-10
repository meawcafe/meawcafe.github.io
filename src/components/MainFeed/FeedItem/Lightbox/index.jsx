import { useEffect, useState } from "react";
import FeedDetails from "./FeedDetails";
import ImagePlayer from "./ImagePlayer";
import { XIcon } from "@phosphor-icons/react";

export default function Lightbox({
  media,
  user,
  timestamp,
  content,
  social_info,
  isLightboxOpen,
  onClose,
}) {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex z-50"
      style={{
        opacity: isLightboxOpen ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: isLightboxOpen ? "auto" : "none",
      }}
    >
      {/* left feed item resume */}
      <div className="w-[22rem] bg-[var(--background2)] p-6 flex flex-col gap-4">
        <FeedDetails
          {...{
            user,
            timestamp,
            content,
            media,
            social_info,
            selectedMedia,
            setSelectedMedia,
            selectedMediaIndex,
            setSelectedMediaIndex,
          }}
        />
      </div>

      <ImagePlayer
        {...{
          media,
          selectedMedia,
          setSelectedMedia,
          selectedMediaIndex,
          setSelectedMediaIndex,
          onClose,
        }}
      />

      {/* close lightbox */}
      <div
        className="absolute top-4 right-4 cursor-pointer rounded-full bg-black/50 p-2 border border-white/50"
        onClick={onClose}
      >
        <XIcon size={18} color="white" weight="bold" />
      </div>
    </div>
  );
}
