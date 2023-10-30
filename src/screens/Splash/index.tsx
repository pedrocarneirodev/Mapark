import GradientBackground from "../../components/GradientBackground";

import { CatolicaIcon, LogoIcon, Text } from "./styles";

const SplashScreen = () => {
  return (
    <GradientBackground center>
      <LogoIcon />
      <Text>Powered by: </Text>
      <CatolicaIcon />
    </GradientBackground>
  );
};

export default SplashScreen;
