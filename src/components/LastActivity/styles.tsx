import styled from "styled-components/native";

import Lock from "../../assets/svg/lock.svg";
import Map from "../../assets/svg/map.svg";
import Parking from "../../assets/svg/parking.svg";
import { Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const isAndroid = Platform.OS === "android";

export const Title = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 20px;

  color: white;

  margin-bottom: 14px;
`;

export const Row = styled.View<{ center?: boolean }>`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  ${({ center }) => center && "align-items: center;"}

  gap: 12px;
`;

export const Box = styled.View.attrs({
  shadowColor: "black",
  shadowOffset: {
    width: -5,
    height: 10,
  },
  shadowOpacity: 1,
  shadowRadius: 25,
} as any)`
  background-color: #d9d9d909;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 18px;

  flex: 1;
  justify-content: space-between;
`;

export const BoxTitle = styled.Text`
  font-family: "Roboto_900Black";
  font-size: 24px;
  color: white;
  text-align: center;
  padding-bottom: 4px;
`;

export const RegularText = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 18px;
  color: white;
  padding-bottom: 4px;
`;

export const ThinText = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 12px;
  color: #bfbfbf;
`;

export const ValueText = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: white;
`;

export const EstableshmentIcon = styled(LinearGradient).attrs({
  colors: ["#0461B9", "hsla(209, 96%, 23%, 1)"],
})<{ colors?: string[] }>`
  height: 42px;
  aspect-ratio: 1;
  border-radius: 21px;
  background-color: hsla(0, 0%, 74%, 0.72);
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EstableshmentIconChar = styled.Text`
  color: white;
  font-size: 24px;
`;

export const KnowMore = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 16px;
  color: white;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 42px;
`;
