import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-left: 18px;
  padding-right: 18px;
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;

  margin-top: 4px;

  position: relative;
`;

export const CarImage = styled.Image`
  height: 175px;
`;

export const ProgressBar = styled.Image`
  width: 100%;

  position: absolute;
  top: 125px;
`;

export const Counter = styled.Text`
  margin-top: 6px;

  color: white;

  font-family: "Roboto_500Medium";
  font-size: 24px;
`;
