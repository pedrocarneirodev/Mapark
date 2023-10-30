import styled from "styled-components/native";

import Logo2 from "../../assets/svg/logo2.svg";

export const LogoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const ContantContainer = styled.View`
  margin-left: 28px;
  margin-right: 28px;
`;

export const LogoIcon = styled(Logo2)`
  margin-top: 64px;
`;

export const Title = styled.Text`
  color: white;
  font-family: "Roboto_700Bold";
  font-size: 48px;

  margin-top: 120px;
  margin-bottom: 50px;
`;

export const Text = styled.Text`
  color: white;
  font-family: "Roboto_400Regular";
  font-size: 12px;

  margin-bottom: 18px;
`;

export const Link = styled.Text`
  color: hsla(209, 100%, 50%, 1);
  text-decoration: underline;
  font-family: "Roboto_400Regular";
  font-size: 12px;

  margin-bottom: 18px;
`;

export const MapBackground = styled.ImageBackground`
  flex: 1;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;

  background-color: hsla(0, 0%, 85%, 1);
  padding-left: 14px;
  margin-bottom: 24px;

  border-radius: 4px;

  color: black;
  font-family: "Roboto_700Bold";
  font-size: 14px;
`;

export const BottomContainer = styled.View`
  display: flex;
  align-items: center;

  margin-top: 28px;
`;
