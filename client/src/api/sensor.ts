import { IbackendTelemetryData } from "types/telemetry";
import ToastShow from "utility/toast";

export const getAllSensorData = async (
  ip?: string,
): Promise<IbackendTelemetryData | undefined> => {
  try {
    const response = await fetch(`http://${ip}/sensor/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    ToastShow("Error while retrieving all sensor data", "error");

    console.error("Failed to fetch telemetry data:", error);
  }
};

export const getBatteryStatus = async (ip: string) => {
  try {
    const response = await fetch(`http://${ip}/sensor/battery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: number = await response.json();
    return data;
  } catch (error) {
    ToastShow("Error while retrieving battery status", "error");

    console.error("Failed to fetch telemetry data:", error);
  }
};

export const getLightStatus = async (ip: string) => {
  try {
    const response = await fetch(`http://${ip}/sensor/light`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: number = await response.json();
    return data;
  } catch (error) {
    ToastShow("Error while retrieving light status", "error");

    console.error("Failed to fetch light status:", error);
  }
};

export const getTrackStatus = async (ip: string) => {
  try {
    const response = await fetch(`http://${ip}/sensor/track`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: number = await response.json();
    return data;
  } catch (error) {
    ToastShow("Error while retrieving track status", "error");

    console.error("Failed to fetch track status", error);
  }
};

export const getSonarStatus = async (ip: string) => {
  try {
    const response = await fetch(`http://${ip}/sensor/sonar`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: number = await response.json();
    return data;
  } catch (error) {
    ToastShow("Error while retrieving sonar status", "error");

    console.error("Failed to fetch sonar status:", error);
  }
};
