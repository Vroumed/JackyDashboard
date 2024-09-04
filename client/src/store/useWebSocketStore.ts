import { create } from "zustand";

interface WebSocketState {
    ws: WebSocket | null;
    status: "idle" | "connecting" | "connected" | "error";
    connect: (ip: string) => void;
    disconnect: () => void;
    sendMessage: (command: object) => void;
}

const useWebSocketStore = create<WebSocketState>((set, get) => ({
    ws: null,
    status: "idle",
    connect: (ip: string) => {
        set({ status: "connecting" });
        const ws = new WebSocket(`ws://${ip}/ws`);

        ws.onopen = () => set({ status: "connected", ws });
        ws.onerror = () => set({ status: "error" });
        ws.onclose = () => set({ status: "idle", ws: null });

        set({ ws });
    },
    disconnect: () => {
        const { ws } = get();
        if (ws) {
            ws.close();
            set({ ws: null, status: "idle" });
        }
    },
    sendMessage: (command: object) => {
        const { ws, status } = get();
        if (ws && status === "connected") {
            ws.send(JSON.stringify(command));
        } else {
            console.warn("WebSocket not connected. Unable to send message.");
        }
    },
}));

export default useWebSocketStore;
