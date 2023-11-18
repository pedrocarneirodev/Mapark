import styled from "styled-components/native";

import Lock from "../../assets/svg/lock.svg";
import Map from "../../assets/svg/map.svg";
import Parking from "../../assets/svg/parking.svg";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export const Title = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 20px;

  color: white;

  margin-bottom: 14px;
`;

export const KnowMore = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: #ffffffd9;

  margin-bottom: 14px;
`;

export const Row = styled.View<{ center?: boolean }>`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  ${({ center }) => center && "align-items: center;"}

  gap: 12px;
`;

export const Box = styled.TouchableOpacity.attrs({
  shadowColor: "black",
  shadowOffset: {
    width: -5,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 15,
} as any)`
  background-color: hsla(0, 0%, 0%, ${isAndroid ? 0.8 : 0.65});
  border-radius: 10px;
  padding: 14px;

  flex: 1;
  justify-content: space-between;

  elevation: 12;
`;

export const BoxTitle = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: white;
`;

export const MapIcon = styled(Map)`
  margin-bottom: 42px;
`;

export const LockIcon = styled(Lock)`
  margin-bottom: 42px;
`;

export const ParkingIcon = styled(Parking)`
  margin-bottom: 42px;
`;
