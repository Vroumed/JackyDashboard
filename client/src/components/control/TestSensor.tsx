import TelemetryPanel from "@components/TelemetryPanel"
import { View, Text } from "react-native"
import { useQuery } from '@tanstack/react-query';
import { getAllSensorData } from "@api/sensor";

export const TestSensor: React.FC = () => {
    const {data, error, isFetching } =  useQuery({
        queryKey:["TelemetryData"],
        queryFn: getAllSensorData,
        refetchInterval:1000
    }) 
    if (isFetching) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching data</Text>;
    return(
        <View>
            <Text>Battery Voltage: {data?.battery_voltage} V</Text>
            <Text>Photosensitive: {data?.photosensitive}</Text>
            <Text>Track Left: {data?.track_left}</Text>
            <Text>Track Middle: {data?.track_middle}</Text>
            <Text>Track Right: {data?.track_right}</Text>
            <Text>Ultrasonic Distance: {data?.ultrasonic_distance} cm</Text>
        </View>
    )
}