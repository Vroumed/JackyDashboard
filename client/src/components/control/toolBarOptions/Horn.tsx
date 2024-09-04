import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface HornProps {
    sendMessage: (command: object) => void
}

export const Horn: React.FC<HornProps> = ({ sendMessage }) => {
    const handleHornPress = () => {
        sendMessage({ cmd: 3, data: { horn: 1, frequency: 300 } })
    }

    const handleHornRelease = () => {
        sendMessage({ cmd: 3, data: { horn: 0, frequency: 300 } })
    }

    return (
        <Pressable
            onPressIn={handleHornPress}
            onPressOut={handleHornRelease}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={styles.text}>Klaxon</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    buttonPressed: {
        backgroundColor: '#1976D2',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});