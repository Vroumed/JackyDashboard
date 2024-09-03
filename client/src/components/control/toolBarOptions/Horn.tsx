import { Pressable, Text } from "react-native";

interface HornProps {
    sendMessage: (command: object) => void
}

export const Horn = (props: HornProps) => {

    const HornPress = () => {
        props.sendMessage({ cmd: 3, data: { horn: 1, frequency: 300 } })
    }

    const HornPressOut = () => {
        props.sendMessage({ cmd: 3, data: { horn: 0, frequency: 300 } })
    }

    return (
        <Pressable
            onPressIn={HornPress}
            onPressOut={HornPressOut}
        >
            <Text>Horn</Text>
        </Pressable>
    );
}