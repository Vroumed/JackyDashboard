import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Horn } from "./toolBarOptions/Horn";
import LightBarButton from "./toolBarOptions/LightBarButton";
import EmojiButton from "./toolBarOptions/EmojiButton"; // Import the new component
import useWebSocketStore from "@store/useWebSocketStore";

const ToolBar: React.FC = () => {
  const sendMessage = useWebSocketStore((state) => state.sendMessage);

  return (
    <View style={styles.container}>
      <Horn sendMessage={sendMessage} />
      <Button title="Start / Stop" />
      <LightBarButton sendMessage={sendMessage} />
      <EmojiButton sendMessage={sendMessage} />
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
