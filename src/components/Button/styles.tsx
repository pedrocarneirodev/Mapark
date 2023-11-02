import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const Text = styled.Text`
  color: white;
  font-family: "Roboto_500Medium";
  font-size: 24px;
  text-align: center;
`;
