import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import useStore from "@store/useStore";

const ControlScreen: React.FC = () => {
  const { connectedCar } = useStore();
  const [websocketStatus, setWebsocketStatus] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (connectedCar) {
      const ws = new WebSocket(`ws://${connectedCar.ip}/ws`);

      ws.onopen = () => {
        setWebsocketStatus("Connected");
        console.log("WebSocket connected");
      };

      ws.onmessage = event => {
        setMessage(event.data);
        console.log("WebSocket message received:", event.data);
      };

      ws.onerror = error => {
        setWebsocketStatus("Error");
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        setWebsocketStatus("Disconnected");
        console.log("WebSocket disconnected");
      };

      websocketRef.current = ws;

      return () => {
        ws.close();
        websocketRef.current = null;
      };
    }
  }, [connectedCar]);

  const sendMessage = (command: object) => {
    if (websocketRef.current && websocketStatus === "Connected") {
      websocketRef.current.send(JSON.stringify(command));
    } else {
      Alert.alert(
        "WebSocket Not Connected",
        "Unable to send message, WebSocket is not connected.",
      );
    }
  };

  const handleControl = (cmd: number, data: object) => {
    const command = {
      cmd,
      data,
    };
    sendMessage(command);
  };

  return (
    <View style={styles.container}>
      {connectedCar ? (
        <>
          <Text>IP: {connectedCar.ip}</Text>
          <Text>Password: {connectedCar.password}</Text>
          <Text>Name: {connectedCar.name}</Text>
          <Text>Status: {connectedCar.ready ? "Ready" : "Not Ready"}</Text>
          <Text>WebSocket Status: {websocketStatus}</Text>
          {message && <Text>Message: {message}</Text>}
          <Button
            title="Activate Horn"
            onPress={() =>
              sendMessage({ cmd: 3, data: { horn: 1, frequency: 300 } })
            }
          />
          <Button
            title="Deactivate Horn"
            onPress={() =>
              sendMessage({ cmd: 3, data: { horn: 0, frequency: 300 } })
            }
          />
          <View style={styles.controlsContainer}>
            <Text>Drive Control</Text>
          </View>
        </>
      ) : (
        <Text>No car connected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  controlsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  controlRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default ControlScreen;
