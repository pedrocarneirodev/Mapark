import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </NavigationContainer>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: blue;
`;
