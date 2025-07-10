import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function ImagePlayer({
  media,
  selectedMedia,
  setSelectedMedia,
  selectedMediaIndex,
  setSelectedMediaIndex,
  onClose,
}) {
  const handleNavigation = (direction) => {
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

      {/* navigation */}
      <div className="absolute flex justify-between w-full px-4 top-1/2 transform -translate-y-1/2">
        <span
          className="bg-black/50 p-2 rounded-full cursor-pointer border border-white/50"
          onClick={() => handleNavigation(-1)}
        >
          <ArrowLeftIcon size={18} color="white" weight="bold" />
        </span>
        <span
          className="bg-black/50 p-2 rounded-full cursor-pointer border border-white/50"
          onClick={() => handleNavigation(1)}
        >
          <ArrowLeftIcon
            size={18}
            color="white"
            weight="bold"
            className="rotate-180"
          />
        </span>
      </div>
    </div>
  );
}
