import { create } from "zustand";
import useWebSocketStore from "./useWebSocketStore";
import { authCar } from "@api/auth";

interface ConnectionState {
    connectedCar: {
        ip: string;
        password: string;
        name: string;
        ready: boolean;
    } | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    connectCar: (ip: string, password: string) => Promise<void>;
    reconnectCar: () => Promise<void>;
}

const useCarStore = create<ConnectionState>((set, get) => ({
    connectedCar: null,
    status: "idle",
    error: null,
    connectCar: async (ip, password) => {
        set({ status: "loading" });
        try {
            const url = `http://${ip}/wrover`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            authCar(ip, password);

            set({ connectedCar: { ...data, ip, password }, status: "succeeded" });
            useWebSocketStore.getState().connect(ip)
        } catch (error) {
            set({ error: (error as Error).message, status: "failed" });
        }
    },
    reconnectCar: async () => {
        const { connectedCar } = get();
        if (connectedCar) {
            await get().connectCar(connectedCar.ip, connectedCar.password);
        }
    },
}));

export default useCarStore;
