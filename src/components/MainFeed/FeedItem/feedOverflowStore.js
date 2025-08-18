import { create } from "zustand";

export const useOverflowStore = create((set) => ({
  overflowMap: {}, // { [section_id]: boolean }
  setOverflow: (section_id, boolean) =>
    set((state) => ({
      overflowMap: { ...state.overflowMap, [section_id]: boolean },
    })),
}));
