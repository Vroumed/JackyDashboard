import { View, StyleSheet, Text } from "react-native";
import { ReactNativeJoystick } from "@korsolutions/react-native-joystick";
import { JoystickTypeData } from "types/controls";

const Joysticks = () => {
  return (
    <View style={styles.container}>
      <ReactNativeJoystick
        color="#ff0000"
        radius={75}
        onMove={(data: JoystickTypeData) => {}}
        onStop={() => {}}
        onStart={() => {}}
      />

      <ReactNativeJoystick
        color="#ff0000"
        radius={75}
        onMove={(data: JoystickTypeData) => {}}
        onStop={() => {}}
        onStart={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});

export default Joysticks;
