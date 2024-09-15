import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { RacePanel } from "@components/dashbord/RacePanel";

//import { useNavigation } from "@react-navigation/native";
import { getAllRaces } from "@api/race";
import ChartsPanel from "@components/dashbord/ChartsPanel";

import { useCurrentRaceStore } from "@store/useCurrentRaceStore";
import { IRaceData } from "types/race";

const RaceDashboard: React.FC = () => {
  const [isAuto, setIsAuto] = useState(false);
  const { currentRace } = useCurrentRaceStore();

  if (!currentRace) {
    return <Text>No race available</Text>;
  }

  //const navigation = useNavigation(); // For redirection

  const {
    data: races,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getAllRaces"],
    queryFn: async () => {
      const result = await getAllRaces();
      return result as IRaceData[];
    },
  });
  
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading races</Text>;

  const hasMultipleRaces = races && races.length > 1;

  const handleRedirect = () => {
    //  navigation.navigate("ControlPage");
  };

  return (
    <View style={styles.container}>
      {hasMultipleRaces && (
        <>
          <ChartsPanel races={races} type="collisions" />
          {isAuto && <ChartsPanel races={races} type="offRoads" />}
        </>
      )}

      <RacePanel data={currentRace} />

      <Button title="Go to Control Page" onPress={handleRedirect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default RaceDashboard;
