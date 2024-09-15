import { ICar } from "types/car";
import ToastShow from "utility/toast";

const serverIP = process.env.REACT_APP_BACKEND_URL;

export const getCarInfo = async (carId: string) => {
  try {
    const response = await fetch(`http://${serverIP}/car/get/${carId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

  } catch (error) {
    ToastShow("Failed to get car info", "error");
    console.error("Failed to get car info:", error);
  }
};

export const getAllCarInfo = async () => {
    try {
        const response = await fetch(`http://${serverIP}/car/get/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
    
        const data : Array<ICar> = await response.json();
        return data;
    
    } catch (error) {
        ToastShow("Failed to get all car info", "error");
        console.error("Failed to  get all car info:", error);
    }
}

export const deleteCar = async (carId: string) => {
    try {
        await fetch(`http://${serverIP}/car/delete/${carId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
    
    } catch (error) {
        ToastShow("Failed to delete car", "error");
        console.error("Failed to delete car:", error);
    }
}


export const getRoadStatusByCarId = async (carId: string) => {
    try {
        const response = await fetch(`http://${serverIP}/offroad/${carId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
    
        const data = await response.json();
        return data;
    
    } catch (error) {
        ToastShow("Failed to get road status", "error");
        console.error("Failed to get road status:", error);
    }
}

export const getCollisionStatusByCarId = async (carId: string) => {
    try {
        const response = await fetch(`http://${serverIP}/collision/${carId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
    
        const data = await response.json();
        return data;
    
    } catch (error) {
        ToastShow("Failed to get collision status", "error");
        console.error("Failed to get collision status:", error);
    }
}