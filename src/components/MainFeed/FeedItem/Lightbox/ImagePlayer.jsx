import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import PlayerButton from "./PlayerButton";

export default function ImagePlayer({
  media,
  selectedMedia,
  setSelectedMedia,
  selectedMediaIndex,
  setSelectedMediaIndex,
  onClose,
}) {
  const handleNavigation = (direction) => {
    console.log("clicked");
    const newIndex =
      (selectedMediaIndex + direction + media.length) % media.length;
    setSelectedMedia(media[newIndex]);
    setSelectedMediaIndex(newIndex);
  };

  return (
    <div
      className="w-full flex-1 h-full flex items-center justify-center relative select-none"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* navigation */}
      <PlayerButton
        top="50%"
        left="1rem"
        // transform="translateY(-50%)"
        icon={<ArrowLeftIcon />}
        onClick={() => handleNavigation(-1)}
      />
      <PlayerButton
        top="50%"
        right="1rem"
        // transform="translateY(-50%) rotate(180deg)"
        icon={<ArrowRightIcon />}
        onClick={() => handleNavigation(1)}
      />

      {selectedMedia.type === "image" ? (
        <img
          src={selectedMedia.url}
          alt={selectedMedia.alt}
          className="w-auto h-auto max-h-full object-contain"
        />
      ) : (
        // youtube iframe
        <iframe
          src={selectedMedia.url}
          title={selectedMedia.alt}
          className="w-full h-full"
          allow="clipboard-write; encrypted-media;"
          allowFullScreen
        />
      )}
    </div>
  );
}
