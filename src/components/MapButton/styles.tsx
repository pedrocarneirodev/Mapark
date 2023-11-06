import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-radius: 14px;
`;

export const Image = styled.Image`
  width: 80px;
`;

export const ParkingImage = styled.Image`
  width: 150%;
  transform: translateY(40px);
  position: absolute;
`;
