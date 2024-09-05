import { View, Text, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAllSensorData } from "@api/sensor";
import useStore from "@store/useStore";

export const SensorPanel: React.FC = () => {
  const { connectedCar } = useStore();
  const { data, error, isFetching } = useQuery({
    queryKey: ["TelemetryData", connectedCar?.ip],
    queryFn: () => getAllSensorData(connectedCar?.ip),
    refetchInterval: 1000,
    enabled: !!connectedCar?.ip,
  });

  if (error) return <Text>Error fetching data</Text>;
  return (
    <View style={styles.container}>
      <Text>Battery Voltage: {data?.battery_voltage} V</Text>
      <Text>Photosensitive: {data?.photosensitive}</Text>
      <Text>Track Left: {data?.track_left}</Text>
      <Text>Track Middle: {data?.track_middle}</Text>
      <Text>Track Right: {data?.track_right}</Text>
      <Text>Ultrasonic Distance: {data?.ultrasonic_distance} cm</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
