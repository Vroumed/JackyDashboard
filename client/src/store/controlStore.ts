import { IControlData, IHeadData } from "types/controls";
import { create } from "zustand";

interface IControlState {
    headData: IHeadData;
    controlData: IControlData;
    setHeadData: (data: IHeadData) => void;
    setControlData: (data: IControlData) => void;
}

export const useControlStore = create<IControlState>((set, get) => ({
    controlData: {
        direction: 0,
        speed: 0,
        thrust: 1,
    },
    headData: {
        headX: 0,
        headY: 0,
    },
    isHeadPressed: false,
    isControlPressed: false,
    setControlData: data => {
        set({ controlData: data });
    },
    setHeadData: data => {
        set({ headData: data });
    },
}));
