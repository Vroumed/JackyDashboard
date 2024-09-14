/**
 * Raw telemetry data from the backend.
 */
export interface IbackendTelemetryData {
  battery_voltage: number; // Battery voltage in volts
  photosensitive: number; // Light sensor value
  track_left: number; // Left line sensor state
  track_middle: number; // Middle line sensor state
  track_right: number; // Right line sensor state
  ultrasonic_distance: number; // Distance measured by ultrasonic sensor
}

/**
 * Processed telemetry data used in the app.
 */
export interface ITelemetryData {
  batteryLife: number; // Battery life derived from voltage
  brightnessSensor: number; // Brightness level from light sensor
  track: ITrackData; // Line tracking sensor states
  distanceSensor: number; // Ultrasonic sensor distance
}

/**
 * Line tracking sensor states.
 */
export interface ITrackData {
  left: number;
  right: number;
  middle: number;
}
