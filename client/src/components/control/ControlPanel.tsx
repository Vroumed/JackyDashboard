import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import ToolBar from "./ToolBar";
import { HeadJoystick } from "./Joysticks/HeadJoystick";
import { ControlJoystick } from "./Joysticks/ControlJoystick";
import { useControlStore } from "@store/controlStore";
import useStore from "@store/useStore";
import { IBackendCommand, IControlData, IHeadData } from "types/controls";

const ControlPanel: React.FC = () => {
    const { connectedCar } = useStore();
    const { controlData, headData } = useControlStore();
    const [websocketStatus, setWebsocketStatus] = useState<string | null>(null);
    const [_message, setMessage] = useState<string | null>(null);
    const websocketRef = useRef<WebSocket | null>(null);

    const controlDataRef = useRef<IControlData>(controlData);
    const headDataRef = useRef<IHeadData>(headData);

    useEffect(() => {
        controlDataRef.current = controlData;
        headDataRef.current = headData;
    }, [controlData, headData]);

    useEffect(() => {
        if (connectedCar) {
            const ws = new WebSocket(`ws://${connectedCar.ip}/ws`);

            ws.onopen = () => {
                setWebsocketStatus("Connected");
                console.log("WebSocket connected");
            };

            ws.onmessage = event => {
                setMessage(event.data);
                console.log("WebSocket message received:", event.data);
            };

            ws.onerror = error => {
                setWebsocketStatus("Error");
                console.error("WebSocket error:", error);
            };

            ws.onclose = () => {
                setWebsocketStatus("Disconnected");
                console.log("WebSocket disconnected");
            };

            websocketRef.current = ws;

            return () => {
                ws.close();
                websocketRef.current = null;
            };
        }
    }, [connectedCar]);

    useEffect(() => {
        if (websocketRef.current && websocketStatus === "Connected") {
            const interval = setInterval(() => {
                const controlCommand: IBackendCommand<IControlData> = {
                    cmd: 1,
                    data: controlDataRef.current,
                };
                websocketRef.current?.send(JSON.stringify(controlCommand));

                const headCommand: IBackendCommand<IHeadData> = {
                    cmd: 2,
                    data: headDataRef.current,
                };
                websocketRef.current?.send(JSON.stringify(headCommand));
            }, 50);

            return () => clearInterval(interval);
        }
    }, [websocketStatus])

    return (
        <View style={styles.container}>
            <View style={styles.joystickContainer}>
                <ControlJoystick />
                <HeadJoystick />
            </View>
            <ToolBar />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joystickContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        alignItems: 'center',
    },
});
export default ControlPanel;
