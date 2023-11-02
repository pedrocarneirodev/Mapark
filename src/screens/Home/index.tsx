import { StatusBar } from "expo-status-bar";

import Nav from "../../components/Nav";
import GradientBackground from "../../components/GradientBackground";
import {
  Container,
  Scroll,
  ImageContainer,
  CarImage,
  ProgressBar,
  Counter,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import ServicesGridButtons from "../../components/ServicesGridButtons";
import LastActivity from "../../components/LastActivity";
import { View } from "react-native";

const MODE: string = "WAITING_PAYMENT"; // "NORMAT" | "FREE_PERIOD"

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <Scroll>
        <StatusBar translucent style="light" />
        <Container>
          <Nav
            onSearchIconPress={() => navigation.navigate("ESTABLISHMENTS")}
          />
          <ImageContainer>
            <CarImage source={require("../../assets/img/mercedes.png")} />
            <ProgressBar
              source={require("../../assets/img/progress-bar-white.png")}
              resizeMode="contain"
            />
            {MODE == "NORMAL" && <Counter>10:00</Counter>}
          </ImageContainer>
          <ServicesGridButtons />
          <View style={{ marginTop: 38 }} />
          <LastActivity />
        </Container>
      </Scroll>
    </GradientBackground>
  );
};

export default HomeScreen;
