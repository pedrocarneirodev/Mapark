import { Container } from "./styles";

const GradientBackground = ({
  children,
  center,
  reverse,
}: {
  children: React.ReactNode;
  center?: boolean;
  reverse?: boolean;
}) => {
  return (
    <Container
      center={center}
      colors={
        reverse
          ? ["#000", "hsl(209, 79%, 21%)"].reverse()
          : ["#000", "hsl(209, 79%, 21%)"]
      }
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3, 1]}
    >
      {children}
    </Container>
  );
};

export default GradientBackground;
