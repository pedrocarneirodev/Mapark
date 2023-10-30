import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)<{ center?: boolean }>`
  flex: 1;

  justify-content: ${({ center }) => center && "center"};
  align-items: ${({ center }) => center && "center"};
`;
