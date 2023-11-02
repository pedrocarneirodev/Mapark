import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 28px 16px;
`;

export const Row = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Col = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Box = styled.View<{
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

export const WarnBox = styled.View`
  height: 82px;
  margin-top: 20px;
  background-color: hsla(40, 91%, 48%, 1);
  border-radius: 15px;
`;

export const Title = styled.Text<{ center?: boolean }>`
  font-family: "Roboto_700Bold";
  font-size: 14px;

  color: white;
  text-align: ${({ center }) => center && "center"};
`;

export const LocationText = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 32px;

  color: hsla(209, 71%, 24%, 1);
  text-align: center;
`;
