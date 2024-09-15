import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button, ViewStyle } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

interface QRScannerProps {
  onScan: (data: string) => void;
  style?: ViewStyle;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, style }) => {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    onScan(data);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (!hasPermission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <Button title="Scan Again" onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default QRScanner;
