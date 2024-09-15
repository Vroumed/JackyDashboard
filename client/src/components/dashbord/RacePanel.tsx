import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IRaceData } from "types/race";

type RaceProps = {
  data: IRaceData;
};

export const RacePanel: React.FC<RaceProps> = ({ data }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>Car Name</Text>
        <Text style={styles.cell}>{data.car.carName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Collisions</Text>
        <Text style={styles.cell}>{data.collisions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>OffRoads</Text>
        <Text style={styles.cell}>{data.offRoads.length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: "left",
  },
});
