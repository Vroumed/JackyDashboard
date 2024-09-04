import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface AutoModeButtonProps {
  sendMessage: (command: object) => void;
  setAutoMode: (enabled: boolean) => void;
}

const AutoModeButton: React.FC<AutoModeButtonProps> = ({ sendMessage, setAutoMode }) => {
  const [isAutoMode, setIsAutoMode] = useState(false);
  const toggleAutoMode = () => {
    const newMode = !isAutoMode;
    setIsAutoMode(newMode);
    setAutoMode(newMode);
    sendMessage({
      cmd: 0,
      data: {
        auto: newMode ? 1 : 0,
      },
    });
  };

  return (
    <Pressable
      onPress={toggleAutoMode}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={styles.text}>{isAutoMode ? "Désactiver Mode Auto" : "Activer Mode Auto"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#d32f2f',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AutoModeButton;
