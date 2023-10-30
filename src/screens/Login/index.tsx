import GradientBackground from "../../components/GradientBackground";

import { CatolicaIcon, LogoIcon, Text } from "./styles";

const LoginScreen = () => {
  return (
    <GradientBackground>
      <LogoIcon />
      <Text>Powered by: </Text>
      <CatolicaIcon />
    </GradientBackground>
  );
};

export default LoginScreen;
