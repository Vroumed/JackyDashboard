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

export interface IControlData {
  speed: number; // between 0 and 1
  thrust: -1 | 1; // -1 for reverse, 1 for forward
  direction: number; // between -1 and 1
}

export interface IHeadData {
  headX: number; // between -1 and 1
  headY: number; // between -1 and 1
}

export interface IBackendCommand<T> {
  cmd: number;
  data: T;
}

export interface IAutomode {
  cmd: number;
  data: AutomodeData;
}

export interface AutomodeData {
  auto: number;
}
