import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import Shadow from "../../assets/svg/shadow.svg";
import InnerShadow from "../../assets/svg/inner-shadow.svg";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

export const BackContainer = styled.TouchableOpacity`
  padding: 24px;
  margin-bottom: 24px;
  margin-top: 24px;

  z-index: 9999999;
`;

export const Header = styled(LinearGradient)`
  border-bottom-left-radius: 32px;
  margin-bottom: 120px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: "Roboto_700Bold";
  font-size: 32px;

  padding-left: 22px;
  margin-bottom: 100px;
`;

export const CarImage = styled.Image`
  position: absolute;
  top: 16px;
  right: -200px;
  z-index: 99;
`;

export const CarShadow = styled(Shadow)`
  position: absolute;
  top: 320px;
  right: 0px;
`;

export const CarInnerShadow = styled(InnerShadow)`
  position: absolute;
  top: 320px;
  right: 0px;

  z-index: 999;
`;

export const Line = styled.Image`
  position: absolute;
  top: 310px;
  right: 0px;

  z-index: 999;
`;

export const ContentContainer = styled.View`
  padding-left: 15px;
  padding-right: 15px;
`;
