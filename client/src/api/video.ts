import { IbackendTelemetryData } from "types/telemetry";
import ToastShow from "utility/toast";

export const videoUrl = (ip: string) => `http://${ip}/video`;

const serverIP = process.env.REACT_APP_BACKEND_URL;

export const getVideoByRaceId = async ( raceId: string) => {
  try {
    const response = await fetch(`http://${serverIP}/run/get/video/${raceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const videoUrl = await response.json();
    return videoUrl;

  } catch (error) {
    ToastShow("Error while retrieving video", "error");

    console.error("Failed to fetch video:", error);
  }
}