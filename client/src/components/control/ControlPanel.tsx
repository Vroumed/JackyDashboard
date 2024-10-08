import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import ToolBar from "./ToolBar";
import { HeadJoystick } from "./joysticks/HeadJoystick";
import { ControlJoystick } from "./joysticks/ControlJoystick";
import { useControlStore } from "@store/controlStore";
import useWebSocketStore from "@store/useWebSocketStore";
import { IBackendCommand, IControlData, IHeadData } from "types/controls";
import { SensorPanel } from "@components/dashbord/SensorPanel";

const ControlPanel: React.FC = () => {
  const { controlData, headData } = useControlStore();
  const { status, sendMessage } = useWebSocketStore();

  const controlDataRef = useRef<IControlData>(controlData);
  const headDataRef = useRef<IHeadData>(headData);

  useEffect(() => {
    controlDataRef.current = controlData;
    headDataRef.current = headData;
  }, [controlData, headData]);

  useEffect(() => {
    if (status === "connected") {
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
  }, [status, sendMessage]);

  return (
    <View style={styles.container}>
      <SensorPanel />
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
