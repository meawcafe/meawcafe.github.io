import { useState } from "react";
import FeedDetails from "./FeedDetails";
import ImagePlayer from "./ImagePlayer";
import { XIcon } from "@phosphor-icons/react";
import responsive from "./responsive.module.css";
import PlayerButton from "./PlayerButton";

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
      className={`fixed inset-0 bg-black/90 flex z-50 ${responsive.lightboxContainer}`}
      style={{
        opacity: isLightboxOpen ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: isLightboxOpen ? "auto" : "none",
      }}
    >
      {/* left feed item resume */}
      <div
        className={`w-[22rem] h-full bg-[var(--background2)] p-6 flex flex-col gap-4 ${responsive.feedDetailsContainer}`}
      >
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
      <PlayerButton
        top="1rem"
        right="1rem"
        icon={<XIcon />}
        onClick={onClose}
      />
    </div>
  );
}
