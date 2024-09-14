import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import QRScanner from "@components/connection/QRScanner";
import useStore from "@store/useStore";
import { useNavigation } from "@react-navigation/native";

const ConnectionScreen: React.FC = () => {
  const { connectCar, status, connectedCar, error } = useStore();
  const [showCamera, setShowCamera] = useState(false);
  const navigation = useNavigation();

  const handleScan = async (data: string) => {
    try {
      if (data) {
        const [ip, password] = data.split(";");
        if (ip && password) {
          console.log("IP:", ip, "PASSWORD:", password);
          await connectCar(ip, password);
        } else {
          throw new Error("Invalid data format");
        }
      }
    } catch (e) {
      Alert.alert("Invalid QR Code", "Please scan a valid QR code.");
    }
  };

  useEffect(() => {
    if (status === "succeeded" && connectedCar) {
      setShowCamera(false);
    }
  }, [status, connectedCar]);

  return (
    <View style={styles.container}>
      {!showCamera && (
        <Button title="Connect to Car" onPress={() => setShowCamera(true)} />
      )}
      {showCamera && <QRScanner onScan={handleScan} style={styles.camera} />}
      {status === "loading" && <Text>Connecting...</Text>}
      {status === "failed" && (
        <Text style={styles.errorText}>Error: {error}</Text>
      )}
      {status === "succeeded" && connectedCar && (
        <View style={styles.infoContainer}>
          <Text>Car detected with IP: {connectedCar.ip}</Text>
          <Text>Name: {connectedCar.name}</Text>
          <Text>Ready: {connectedCar.ready ? "Yes" : "No"}</Text>
          <Button
            title="Control Car"
            // @ts-expect-error Navigation prop type mismatch
            onPress={() => navigation.navigate("Control")}
          />
        </View>
      )}
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
  camera: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    marginTop: 20,
    color: "blue",
  },
});

export default ConnectionScreen;
