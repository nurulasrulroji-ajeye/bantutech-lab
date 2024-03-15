import { create } from "zustand";
import createSelectors from "./selectors";

type ScrollState = {
  scrollPos: number;
};

type ScrollAction = {
  updateScrollPos: (scrollPos: ScrollState["scrollPos"]) => void;
};

const useScrollStore = create<ScrollState & ScrollAction>((set) => ({
  scrollPos: 0,
  updateScrollPos: (scrollPos) => set(() => ({ scrollPos })),
}));

export default createSelectors(useScrollStore);
