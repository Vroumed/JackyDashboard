import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const apiData = [
  { valeur: 29.9, temps: "2023-01-01T00:00:00Z" },
  { valeur: 71.5, temps: "2023-01-02T00:00:00Z" },
  { valeur: 106.4, temps: "2023-01-03T00:00:00Z" },
  { valeur: 129.2, temps: "2023-01-04T00:00:00Z" },
  { valeur: 144.0, temps: "2023-01-05T00:00:00Z" },
];

const ChartsPanel = () => {
  const labels = apiData.map(item => new Date(item.temps).toLocaleDateString());
  const dataValues = apiData.map(item => item.valeur);

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataValues,
            },
          ],
        }}
        width={screenWidth}
        height={300}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#1c313a",
          backgroundGradientFrom: "#455a64",
          backgroundGradientTo: "#1c313a",
          decimalPlaces: 2, // Nombre de décimales pour les valeurs
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier // Pour arrondir les courbes
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#000", // Fond de l'application
  },
  chart: {
    marginVertical: 0,
    marginHorizontal: 40, // Suppression de toute marge verticale
    borderRadius: 15, // Aucun arrondi sur les bords
  },
});

export default ChartsPanel;
