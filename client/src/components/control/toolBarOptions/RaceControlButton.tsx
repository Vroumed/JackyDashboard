import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface RaceControlButtonProps {
    sendMessage: (command: object) => void;
}

const RaceControlButton: React.FC<RaceControlButtonProps> = ({ sendMessage }) => {
    const [isRaceActive, setIsRaceActive] = useState(false);

    const toggleRace = () => {
        const newRaceState = !isRaceActive;
        setIsRaceActive(newRaceState);

        sendMessage({

        });
    };

    return (
        <Pressable
            onPress={toggleRace}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={styles.text}>
                {isRaceActive ? "Stop Race" : "Start Race"}
            </Text>
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

export default RaceControlButton;
