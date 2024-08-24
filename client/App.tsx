import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </View>      
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
});
