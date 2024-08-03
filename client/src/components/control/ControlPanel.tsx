import { View } from "react-native";
import Joysticks from "./Joysticks";
import ToolBar from "./ToolBar";

const ControlPanel = () => {
  return (
    <View>
      <Joysticks />
      <ToolBar />
    </View>
  );
};

export default ControlPanel;
