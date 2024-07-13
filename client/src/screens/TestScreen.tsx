import { View, StyleSheet, Text } from "react-native";
import { ReactNativeJoystick } from "@korsolutions/react-native-joystick";
import { JoystickTypeData } from "types/controls";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <ReactNativeJoystick
        color="#ff0000"
        radius={75}
        onMove={(data: JoystickTypeData) => {
          console.log(data.position);
        }}
        onStop={() => {
          console.log("stop");
        }}
        onStart={() => {
          console.log("ca part");
        }}
      />
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

export default TestScreen;
