import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import ToolBar from "./ToolBar";
import { HeadJoystick } from "./joysticks/HeadJoystick";
import { ControlJoystick } from "./joysticks/ControlJoystick";
import { useControlStore } from "@store/controlStore";
import useWebSocketStore from "@store/useWebSocketStore";
import useStore from "@store/useStore";
import { IBackendCommand, IControlData, IHeadData } from "types/controls";
import AutoModeButton from "./toolBarOptions/AutoModeButton"; // Import the AutoModeButton component

const ControlPanel: React.FC = () => {
    const { controlData, headData } = useControlStore();
    const { status, sendMessage } = useWebSocketStore();
    const { connectedCar } = useStore();

    const controlDataRef = useRef<IControlData>(controlData);
    const headDataRef = useRef<IHeadData>(headData);

    const [isAutoMode, setIsAutoMode] = useState(false);

    useEffect(() => {
        controlDataRef.current = controlData;
        headDataRef.current = headData;
    }, [controlData, headData]);


    useEffect(() => {
        if (status === "connected" && !isAutoMode) {
            const interval = setInterval(() => {
                const controlCommand: IBackendCommand<IControlData> = {
                    cmd: 1,
                    data: controlDataRef.current,
                };
                sendMessage(controlCommand);

                const headCommand: IBackendCommand<IHeadData> = {
                    cmd: 2,
                    data: headDataRef.current,
                };
                sendMessage(headCommand);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [status, sendMessage, isAutoMode]);

    return (
        <View style={styles.container}>
            <View style={styles.joystickContainer}>

                {!isAutoMode && (
                    <>
                        <ControlJoystick />
                        <HeadJoystick />
                    </>
                )}
            </View>
            <ToolBar />
            <AutoModeButton sendMessage={sendMessage} setAutoMode={setIsAutoMode} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    joystickContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        alignItems: "center",
    },
});

export default ControlPanel;
