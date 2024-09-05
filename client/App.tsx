import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ScreenOrientation from "expo-screen-orientation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </GestureHandlerRootView>
    </QueryClientProvider>
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
