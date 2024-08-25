import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Video } from "expo-av";
import useStore from "@store/useStore";

type BackgroundVideoProps = {
  videoUrl: string;
  showVideo: boolean;
  children: React.ReactNode;
  backgroundUrl: string;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl,
  showVideo,
  children,
  backgroundUrl,
}) => {
  const { connectedCar } = useStore();

  return (
    <View style={styles.container}>
      {showVideo ? (
        <Video
          source={{ uri: videoUrl || `http://${connectedCar}:7000/camera` }}
          style={StyleSheet.absoluteFill}
          shouldPlay
          isLooping
          isMuted
        />
      ) : (
        <ImageBackground
          source={require(backgroundUrl)}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      )}

      {}
      <View style={styles.overlay}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default BackgroundVideo;
