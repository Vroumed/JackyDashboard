import { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import useStore from "@store/useStore";
import { useControlStore } from "@store/controlStore";
import { Horn } from "./toolBarOptions/Horn";
import LightBarButton from "./toolBarOptions/LightBarButton";

//! Lancer/arreter la course
//! KLAXON !!!!
//! Phare

const ToolBar: React.FC = () => {
  const { connectedCar } = useStore();
  const [websocketStatus, setWebsocketStatus] = useState<string | null>(null);
  const [_message, setMessage] = useState<string | null>(null);
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

  return (
    <View style={styles.container}>
      <Horn sendMessage={sendMessage} />
      <Button title="Start / Stop" />
      <LightBarButton sendMessage={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    padding: 16,
  },
});

export default ToolBar;
