import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
// import AppNavigator from "./src/navigation/AppNavigator";
import TestScreen from "./src/screens/TestScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TestScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
