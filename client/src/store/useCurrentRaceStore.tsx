import { create } from "zustand";
import { IRaceData } from "types/race";

interface IRaceState {
  currentRace: IRaceData | null;
  setRaceData: (data: IRaceData) => void;
  clearRaceData: () => void;
}

export const useCurrentRaceStore = create<IRaceState>(set => ({
  currentRace: null,
  setRaceData: (data: IRaceData) => {
    set({ currentRace: data });
  },
  clearRaceData: () => {
    set({ currentRace: null });
  },
}));
