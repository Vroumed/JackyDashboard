import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
// import AppNavigator from "./src/navigation/AppNavigator";
import TestScreen from "./src/screens/TestScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <TestScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
});
