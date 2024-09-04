import useStore from "@store/useStore";
import { IbackendTelemetryData } from "types/telemetry";
//import { TelemetryData } from "types/telemetry";
const { connectedCar } = useStore();


export const getAllSensorData = async ():Promise<IbackendTelemetryData | undefined> => {
    try {
        const response = await fetch(`http://${connectedCar?.ip}/sensor/all`, 
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }
        );
        const data = await response.json();
        const formatedData= (data);
        console.log("Telemetry data:", formatedData);
        return formatedData;
    } catch (error) {
        console.error("Failed to fetch telemetry data:", error);
    }
};

export const getBatteryStatus = async () => {
    try {
        const response = await fetch(`http://${connectedCar?.ip}/sensor/battery`, 
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }      
          );
        const data: number = await response.json();
        console.log("battery data:", data)
        return data;
    } catch (error) {
        console.error("Failed to fetch telemetry data:", error)
    }
}

export const getLightStatus = async () => {
    try {
        const response = await fetch(`http://${connectedCar?.ip}/sensor/light`, 
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }        );
        const data: number = await response.json();
        console.log("light data:", data)
        return data;
    } catch (error) {
        console.error("Failed to fetch light status:", error)
    }
}

export const getTrackStatus = async () => {
    try {
        const response = await fetch(`http://${connectedCar?.ip}/sensor/track`, 
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }        );
        const data: number = await response.json();
        console.log("track data:", data)
        return data;
    } catch (error) {
        console.error("Failed to fetch track status", error)
    }
}

export const getSonarStatus = async () => {
    try {
        const response = await fetch(`http://${connectedCar?.ip}/sensor/sonar`,
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }        );
        const data: number = await response.json();
        console.log("sonar data:", data)
        return data;
    } catch (error) {
        console.error("Failed to fetch sonar status:", error)
    }
}