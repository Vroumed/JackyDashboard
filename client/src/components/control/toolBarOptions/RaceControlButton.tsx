import { endRaceById, startRace } from "@api/race";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const RaceControlButton: React.FC = () => {
  const [isRaceActive, setIsRaceActive] = useState(false);
  const [raceId, setRaceId] = useState("");
  const toggleRace = () => {
    const newRaceState = !isRaceActive;

    if (newRaceState) {
      startRace();
    } else {
      endRaceById(raceId);
    }

    setIsRaceActive(newRaceState);
  };

  return (
    <Pressable
      onPress={toggleRace}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.text}>
        {isRaceActive ? "Stop Race" : "Start Race"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: "#1976D2",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RaceControlButton;
