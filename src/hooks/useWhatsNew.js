import { useWhatsNewStore } from "~/store/whatsNew";

const WHATS_NEW_KEY = "whats_new_seen_version";
const CURRENT_VERSION = "2025-08-25";

export default function useWhatsNew() {
  // const isModalOpen = useWhatsNewStore((state) => state.isModalOpen);
  const dontShowAgain = useWhatsNewStore((state) => state.dontShowAgain);
  const { setIsModalOpen } = useWhatsNewStore.getState();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (dontShowAgain) {
      localStorage.setItem(WHATS_NEW_KEY, CURRENT_VERSION);
    } else {
      localStorage.removeItem(WHATS_NEW_KEY);
    }
  };

  return {
    handleCloseModal,
    WHATS_NEW_KEY,
    CURRENT_VERSION,
  };
}
