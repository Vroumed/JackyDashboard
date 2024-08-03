import { View, Button, StyleSheet } from "react-native";

//! Lancer/arreter la course
//! KLAXON !!!!
//! Phare

const ToolBar = () => {
  const Klaxonage = () => {
    console.log("KLAXONAAAAAGE");
  };
  const Race = () => {
    console.log("RAAAACE");
  };
  const Light = () => {
    console.log("LIIIIIIIIIGHT");
  };

  return (
    <View style={styles.container}>
      <Button title="Klaxon" onPress={Klaxonage} />
      <Button title="Start / Stop" onPress={Race} />
      <Button title="Light" onPress={Light} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    padding: 16,
  },
});

export default ToolBar;
