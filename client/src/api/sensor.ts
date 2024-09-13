import useStore from "@store/useStore";
import Toast from "react-native-toast-message";
import { IbackendTelemetryData } from "types/telemetry";

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
    console.log("Telemetry data:", data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Error while retrieving all sensor data",
    });

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
    console.log("battery data:", data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Error while retrieving battery status",
    });

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
    console.log("light data:", data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Error while retrieving light status",
    });

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
    console.log("track data:", data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Error while retrieving track status",
    });

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
    console.log("sonar data:", data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Error while retrieving sonar status",
    });

    console.error("Failed to fetch sonar status:", error);
  }
};
