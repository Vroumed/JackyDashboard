import React from "react";
import { Button } from "react-native";

interface LightBarButtonProps {
  sendMessage: (command: object) => void;
}

const LightBarButton: React.FC<LightBarButtonProps> = ({ sendMessage }) => {

  const getRandomColor = () => {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
  };

  const handleLightPress = () => {
    const ledMatrix = Array.from({ length: 5 }, getRandomColor);
    sendMessage({
      cmd: 6,
      data: {
        LedMatrix: ledMatrix,
      },
    });
  };

  return (
    <Button title="Light" onPress={handleLightPress} />
  );
};

export default LightBarButton;
