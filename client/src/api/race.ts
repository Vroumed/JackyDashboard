import { IRaceData } from "types/race";
import ToastShow from "utility/toast";

const serverIP = "server ip";
export const startRace = async () => {
  try {
    await fetch(`http://${serverIP}/get/run/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to start race:", error);
  }
};

export const getRaceById = async (raceId: string, serverIP: string) => {
  try {
    const response = await fetch(`http://${serverIP}/run/get/${raceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: IRaceData = await response.json();

    console.log("Race data:", data);
    return data;
  } catch (error) {
    ToastShow("Error retrieving race data", "error");
    console.error("Failed to fetch race data:", error);
  }
};

export const getAllRaces = async (serverIP: string) => {
  try {
    const response = await fetch(`http://${serverIP}/run/get/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: Array<[]> = await response.json();

    console.log("All races data:", data);
    return data;
  } catch (error) {
    ToastShow("Error retrieving all races", "error");
    console.error("Failed to fetch all races:", error);
  }
};

export const endRaceById = async (
  raceId: string,
  serverIP: string,
): Promise<IRaceData | undefined> => {
  try {
    const response = await fetch(
      `http://${serverIP}/run/get/run/${raceId}/end`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
    const data = await response.json();

    console.log(`Race ${raceId} ended successfully:`, data);
    ToastShow(`Race ${raceId} ended successfully`, "success");
    return data;
  } catch (error) {
    ToastShow(`Error ending race ${raceId}`, "error");
    console.error(`Failed to end race ${raceId}:`, error);
  }
};
