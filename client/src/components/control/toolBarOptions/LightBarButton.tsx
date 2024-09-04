import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface LightBarButtonProps {
  sendMessage: (command: object) => void;
}

const LightBarButton: React.FC<LightBarButtonProps> = ({ sendMessage }) => {
  const getRandomColor = () => {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
  };

  const handleLightPress = () => {
    const ledMatrix = Array.from({ length: 5 }, getRandomColor);
    sendMessage({
      cmd: 6,
      data: {
        LedMatrix: ledMatrix,
      },
    });
  };

  return (
    <Pressable
      onPress={handleLightPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={styles.text}>Lumières</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#45a049',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LightBarButton;