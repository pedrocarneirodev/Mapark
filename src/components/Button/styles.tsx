import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  height: string;
  variant: "danger" | "success" | "warning" | "info";
}>`
  height: ${({ height }) => height};
  width: 100%;

  background-color: ${({ variant }) => {
    if (variant === "info") {
      return "hsla(209, 96%, 37%, 1)";
    }
    return "hsla(209, 96%, 37%, 1)";
  }};

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
