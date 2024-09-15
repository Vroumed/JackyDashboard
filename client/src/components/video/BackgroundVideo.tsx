import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Video } from "expo-av";
import useStore from "@store/useStore";
import { videoUrl } from "@api/video";

type BackgroundVideoProps = {
  showVideo: boolean;
  children: React.ReactNode;
  backgroundUrl: string;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  showVideo,
  children,
  backgroundUrl,
}) => {
  const { connectedCar } = useStore();

  return (
    <View style={styles.container}>
      {showVideo ? (
        <Video
          source={{ uri: videoUrl(connectedCar!.ip) }}
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
