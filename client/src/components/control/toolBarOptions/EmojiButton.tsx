import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface EmojiButtonProps {
    sendMessage: (command: object) => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ sendMessage }) => {
    const [currentMode, setCurrentMode] = useState(0);
    const totalModes = 7;

    const handleEmojiPress = () => {
        const nextMode = (currentMode + 1) % totalModes;
        setCurrentMode(nextMode);

        sendMessage({
            cmd: 4,
            data: {
                mode: nextMode,
            },
        });
    };

    return (
        <Pressable
            onPress={handleEmojiPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
        >
            <Text style={styles.text}>Emoji {currentMode}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFC107',
        padding: 10,
        borderRadius: 5,
    },
    buttonPressed: {
        backgroundColor: '#FFB300',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default EmojiButton;
