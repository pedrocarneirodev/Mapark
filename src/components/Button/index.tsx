import { DimensionValue, TouchableOpacity } from "react-native";
import { Container, Text } from "./styles";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "danger" | "success" | "warning" | "info";
  height?: number;
  width?: DimensionValue;
};

const Button = ({
  label,
  onPress,
  variant = "info",
  height = 70,
  width = "100%",
}: ButtonProps) => {
  const getColors = () => {
    if (variant === "info") {
      return ["hsla(209, 96%, 37%, 1)", "hsla(209, 96%, 37%, 1)"];
    }
    if (variant === "success") {
      return ["hsla(134, 60%, 46%, 1)", "hsla(134, 60%, 46%, 0.5)"];
    }
    return ["hsla(209, 96%, 37%, 1)", "hsla(209, 96%, 37%, 1)"];
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ height: height, width }}>
      <Container colors={getColors()}>
        <Text>{label}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
