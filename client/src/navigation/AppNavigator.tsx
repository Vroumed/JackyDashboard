import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConnectionScreen from "@screens/ConnectionScreen";
import ControlPanel from "@components/control/ControlPanel";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Connection">
                <Stack.Screen
                    name="Connection"
                    component={ConnectionScreen}
                    options={{ title: "Connect to Car" }}
                />
                <Stack.Screen
                    name="Control"
                    component={ControlPanel}
                    options={{ title: "Control Car" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
