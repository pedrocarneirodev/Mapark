import { StatusBar } from "expo-status-bar";

import GradientBackground from "../../components/GradientBackground";
import { CatolicaIcon, LogoIcon, Text } from "./styles";

const SplashScreen = () => {
  return (
    <GradientBackground center>
      <StatusBar translucent />
      <LogoIcon />
      <Text>Powered by: </Text>
      <CatolicaIcon />
    </GradientBackground>
  );
};

export default SplashScreen;
