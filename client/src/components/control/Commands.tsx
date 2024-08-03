import { View, StyleSheet, Text } from "react-native";
import ControlPanel from "./ControlPanel";
import TelemetryPanel from "@components/TelemetryPanel";

const Commands = () => {
  const TelemetryData = {
    speed: 100,
    batteryLife: 50,
    totalDistance: 151251445,
    distanceSensors: 0,
  };

  return (
    <View style={styles.container}>
      <TelemetryPanel
        batteryLife={TelemetryData.batteryLife}
        distanceSensors={TelemetryData.distanceSensors}
        totalDistance={TelemetryData.totalDistance}
        speed={TelemetryData.speed}
      />
      <ControlPanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
    padding: 16,
  },
});

export default Commands;
