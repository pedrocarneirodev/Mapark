import { Container } from "./styles";

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      colors={["#000", "hsl(209, 79%, 21%)"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3, 1]}
    >
      {children}
    </Container>
  );
};

export default GradientBackground;
