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
import GridButtons from "../../components/GridButtons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
          <Counter>10:00</Counter>
        </ImageContainer>
        <View style={{ flex: 1 }} />
        <GridButtons />
      </Container>
    </GradientBackground>
  );
};

export default HomeScreen;
