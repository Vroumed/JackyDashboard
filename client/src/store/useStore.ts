import { create } from "zustand";

interface ConnectionState {
  connectedCar: { ip: string; password: string; name: string; ready: boolean } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  connectCar: (ip: string, password: string) => Promise<void>;
}

const useStore = create<ConnectionState>((set) => ({
  connectedCar: null,
  status: "idle",
  error: null,
  connectCar: async (ip, password) => {
    set({ status: "loading" });
    try {
      const url = `http://${ip}/wrover`;
      console.log("Connecting to car", url);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Connected to car", data);
      set({ connectedCar: { ...data, ip, password }, status: "succeeded" });
    } catch (error) {
      set({ error: (error as Error).message, status: "failed" });
    }
  },
}));

export default useStore;
