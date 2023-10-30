import { Container } from "./styles";

const GradientBackground = ({
  children,
  center,
  reverse,
  customColors,
}: {
  children: React.ReactNode;
  center?: boolean;
  reverse?: boolean;
  customColors?: string[];
}) => {
  const getColors = () => {
    if (customColors) {
      return customColors;
    }
    if (reverse) {
      return ["#000", "hsl(209, 79%, 17%)"].reverse();
    }
    return ["#000", "hsl(209, 79%, 21%)"];
  };

  return (
    <Container
      center={center}
      colors={getColors()}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.3, 1]}
    >
      {children}
    </Container>
  );
};

export default GradientBackground;
