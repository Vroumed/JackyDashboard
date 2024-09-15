import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { IRaceData } from "types/race";

type ChartProps = {
  races: IRaceData[];
  type: "collisions" | "offRoads";
};

const screenWidth = Dimensions.get("window").width;

const BarChartPanel: React.FC<ChartProps> = ({ races, type }) => {
  const labels = races.map(race =>
    new Date(race.connection.time).toLocaleDateString(),
  );
  const dataValues = races.map(race =>
    type === "collisions" ? race.collisions.length : race.offRoads.length,
  );

  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataValues,
            },
          ],
        }}
        width={screenWidth - 40}
        height={300}
        yAxisLabel="number"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#1c313a",
          backgroundGradientFrom: "#455a64",
          backgroundGradientTo: "#1c313a",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15,
          },
        }}
        style={styles.chart}
        showBarTops={false}
        withVerticalLabels={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  chart: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
  },
});

export default BarChartPanel;
