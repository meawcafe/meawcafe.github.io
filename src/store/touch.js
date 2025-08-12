import { create } from "zustand";

const MIN_SECTION_INDEX = 0;
const MAX_SECTION_INDEX = 2;

export const useTouchStore = create((set) => ({
  sectionIndex: 1,
  touchPositionY: 0,
  showNavHelperLeft: false,
  showNavHelperRight: false,

  incrementSectionIndex: () =>
    set((state) => ({
      sectionIndex: Math.min(state.sectionIndex + 1, MAX_SECTION_INDEX),
    })),
  decrementSectionIndex: () =>
    set((state) => ({
      sectionIndex: Math.max(state.sectionIndex - 1, MIN_SECTION_INDEX),
    })),

  setSectionIndex: (index) =>
    set({
      sectionIndex: Math.max(
        MIN_SECTION_INDEX,
        Math.min(index, MAX_SECTION_INDEX)
      ),
    }),

  setTouchPositionY: (position) => set({ touchPositionY: position }),

  setShowNavHelpers: ({ left, right }) =>
    set({ showNavHelperLeft: left, showNavHelperRight: right }),

  hideNavHelpers: () =>
    set({ showNavHelperLeft: false, showNavHelperRight: false }),
}));
