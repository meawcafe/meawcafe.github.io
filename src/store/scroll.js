import { create } from "zustand";

export const useScrollStore = create((set) => ({
  feedContainerRef: null,
  scrollHeight: 0,
  scrollOnTop: true,
  focusedFeedItemId: "about-me",
  feedOffsetTopInfo: {
    "about-me": null,
    education: null,
    "work-experience": null,
    skills: null,
    projects: null,
    "contact-me": null,
  },
  setFeedContainerRef: (ref) => set({ feedContainerRef: ref }),
  setScrollHeight: (height) => set({ scrollHeight: height }),
  setScrollOnTop: (isOnTop) => set({ scrollOnTop: isOnTop }),
  setFocusedFeedItemId: (id) => set({ focusedFeedItemId: id }),

  setFeedOffsetTopInfo: (updater) =>
    set((state) => {
      const newInfo =
        typeof updater === "function"
          ? updater(state.feedOffsetTopInfo)
          : updater;

      return { feedOffsetTopInfo: newInfo };
    }),
}));
