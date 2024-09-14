import React from "react";
import { AxisPad, AxisPadTouchEvent } from "@fustaro/react-native-axis-pad";
import { useControlStore } from "@store/controlStore";
import { IHeadData } from "types/controls";

export const HeadJoystick: React.FC = () => {
  const setHeadData = useControlStore(state => state.setHeadData);

  const onTouchEvent = (event: AxisPadTouchEvent) => {
    if (event.eventType === "pan" || event.eventType === "end") {
      const headData: IHeadData = {
        headX: -event.ratio.x,
        headY: -event.ratio.y,
      };
      setHeadData(headData);
    }
  };

  return <AxisPad id={"head-pad"} size={150} onTouchEvent={onTouchEvent} />;
};
