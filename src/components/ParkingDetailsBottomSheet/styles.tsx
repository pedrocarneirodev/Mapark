import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 28px 16px;
`;

export const Row = styled.View<{ center?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  ${({ center }) => center && "align-items: center;"}
  gap: 16px;
`;

export const Col = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Box = styled.TouchableOpacity<{
  size: "big" | "small";
  color: "dark" | "light";
}>`
  flex: ${({ size }) => (size === "big" ? 2 : 1)};
  background-color: ${({ color }) =>
    color === "dark" ? "hsla(217, 33%, 17%, 1)" : "hsla(212, 100%, 49%, 1)"};
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarnBox = styled.TouchableOpacity`
  height: 82px;
  margin-top: 20px;
  background-color: hsla(40, 91%, 48%, 1);
  border-radius: 15px;
  padding: 12px;
`;

export const Title = styled.Text<{
  center?: boolean;
  size?: "big";
  black?: boolean;
}>`
  font-family: "Roboto_700Bold";
  font-size: ${({ size }) => (size === "big" ? 20 : 14)}px;

  color: ${({ black }) => (black ? "black" : "white")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const WarnDescription = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: black;
  text-align: center;
  margin-top: 6px;
`;

export const LocationText = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 32px;

  color: hsla(209, 71%, 24%, 1);
  text-align: center;
`;
