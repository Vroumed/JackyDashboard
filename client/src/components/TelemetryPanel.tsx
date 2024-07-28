
import { View,Text } from "react-native"
import { TelemetryData } from "types/telemetry"



const TelemetryPanel:React.FC<TelemetryData> = (props) => {
    return (
    <View>
        <Text>speed: {props.speed}</Text>
        <Text>batteryLife: {props.batteryLife}</Text>
        <Text>totalDistance: {props.totalDistance}</Text>
        <Text>distanceSensors: {props.distanceSensors}</Text>
    </View>
    )
} 

export default TelemetryPanel;