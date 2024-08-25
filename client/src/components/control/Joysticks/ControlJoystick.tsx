import React from "react";
import { AxisPad, AxisPadTouchEvent } from "@fustaro/react-native-axis-pad";
import { useControlStore } from "@store/controlStore";
import { IControlData } from "types/controls";

export const ControlJoystick: React.FC = () => {
  const setControlData = useControlStore(state => state.setControlData);

  const onTouchEvent = (event: AxisPadTouchEvent) => {
    if (event.eventType === "pan" || event.eventType === "end") {
      const controlData: IControlData = {
        speed: Math.abs(event.ratio.y),
        thrust: event.ratio.y >= 0 ? 1 : -1,
        direction: event.ratio.x,
      };
      setControlData(controlData);
    }
  };

  return <AxisPad id={"control-pad"} size={150} onTouchEvent={onTouchEvent} />;
};
