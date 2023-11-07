import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const NavContainer = styled(SafeAreaView)`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Header = styled.Text`
  color: white;

  font-family: "Roboto_500Medium";
  font-size: 24px;
  text-align: center;
`;

export const ParkingImage = styled.ImageBackground`
  flex: 1;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
`;
