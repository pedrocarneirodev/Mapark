import styled from "styled-components/native";

import Search from "../../assets/svg/search.svg";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  width: 100%;
`;

export const CloseContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  top: 10px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 60%;

  background-color: hsla(0, 0%, 85%, 1);
  padding-left: 14px;
  margin-bottom: 14px;

  border-radius: 50px;

  color: black;
  font-family: "Roboto_700Bold";
  font-size: 14px;

  align-self: center;
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.4);
  border-radius: 2px;
`;
