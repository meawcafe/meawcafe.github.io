import { create } from "zustand";

export const useWhatsNewStore = create((set) => ({
  isModalOpen: false,
  dontShowAgain: false,
  setIsModalOpen: (value) => set({ isModalOpen: value }),
  setDontShowAgain: (value) => set({ dontShowAgain: value }),
}));
