/**
 * Type data for joystick component
 */
export type JoystickTypeData = {
  type: "move" | "stop" | "start";
  position: {
    x: number;
    y: number;
  };
  force: number;
  angle: {
    radian: number;
    degree: number;
  };
};
