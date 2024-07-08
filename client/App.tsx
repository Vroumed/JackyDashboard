import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as SplashScreen from "expo-splash-screen";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

// Garder le splash screen visible pendant le chargement des ressources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App: React.FC = () => {
  const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    );
  };

  const ControlScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Control</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Control"
          component={ControlScreen}
          options={{ title: "Car Control" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
