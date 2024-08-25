import { View } from "react-native";
import ToolBar from "./ToolBar";
import { HeadJoystick } from "./Joysticks/HeadJoystick";
import { ControlJoystick } from "./Joysticks/ControlJoystick";

const ControlPanel = () => {
  return (
    <View>
      <ControlJoystick />
      <ToolBar />
      <HeadJoystick />
    </View>
  );
};

export default ControlPanel;
