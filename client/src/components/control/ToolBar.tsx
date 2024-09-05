import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Horn } from "./toolBarOptions/Horn";
import LightBarButton from "./toolBarOptions/LightBarButton";
import EmojiButton from "./toolBarOptions/EmojiButton";
import AutoModeButton from "./toolBarOptions/AutoModeButton";
import RaceControlButton from "./toolBarOptions/RaceControlButton";
import useWebSocketStore from "@store/useWebSocketStore";

const ToolBar: React.FC = () => {
  const sendMessage = useWebSocketStore((state) => state.sendMessage);

  return (
    <View style={styles.container}>
      <Horn sendMessage={sendMessage} />
      <LightBarButton sendMessage={sendMessage} />
      <EmojiButton sendMessage={sendMessage} />
      {/* <AutoModeButton sendMessage={sendMessage} setAutoMode={() => { }} />// */}
      <RaceControlButton sendMessage={sendMessage} />
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
