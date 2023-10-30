import { Container, Text } from "./styles";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "danger" | "success" | "warning" | "info";
  height?: string;
};

const Button = ({
  label,
  onPress,
  variant = "info",
  height = "70px",
}: ButtonProps) => {
  return (
    <Container onPress={onPress} height={height} variant={variant}>
      <Text>{label}</Text>
    </Container>
  );
};

export default Button;
