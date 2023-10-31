import { StatusBar } from "expo-status-bar";

import Nav from "../../components/Nav";
import GradientBackground from "../../components/GradientBackground";
import {
  Container,
  ImageContainer,
  CarImage,
  ProgressBar,
  Counter,
} from "./styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FreePeriodGridButtons from "../../components/FreePeriodGridButtons";
import WaitingPaymentGridButtons from "../../components/WaitingPaymentGridButtons";

const MODE: string = "WAITING_PAYMENT";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <StatusBar translucent />
      <Container>
        <Nav onSearchIconPress={() => navigation.navigate("ESTABLISHMENTS")} />
        <ImageContainer>
          <CarImage source={require("../../assets/img/mercedes.png")} />
          <ProgressBar
            source={require("../../assets/img/progress-bar-white.png")}
            resizeMode="contain"
          />
          {MODE == "NORMAL" && <Counter>10:00</Counter>}
        </ImageContainer>
        <View style={{ flex: 1 }} />
        {MODE === "NORMAL" && <FreePeriodGridButtons />}
        {MODE === "WAITING_PAYMENT" && <WaitingPaymentGridButtons />}
        {MODE === "FREE_PERIOD" && <FreePeriodGridButtons />}
      </Container>
    </GradientBackground>
  );
};

export default HomeScreen;
