import { SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Back from "../../assets/svg/back.svg";
import GradientBackground from "../../components/GradientBackground";
import {
  Container,
  BackContainer,
  Header,
  Title,
  CarImage,
  CarShadow,
  CarInnerShadow,
  Line,
  ContentContainer,
} from "./styles";
import LastActivity from "../../components/LastActivity";

const HistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        colors={["#000", "hsl(209, 79%, 21%)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.3, 1]}
      >
        <SafeAreaView>
          <BackContainer onPress={() => navigation.goBack()}>
            <Back />
          </BackContainer>
        </SafeAreaView>
        <Title>Histórico{"\n"}Atividade</Title>
        <CarImage source={require("../../assets/img/mercedes-front.png")} />
        <CarShadow />
        <CarInnerShadow />
        <Line source={require("../../assets/img/half-progress-bar-blue.png")} />
      </Header>

      <ContentContainer>
        <LastActivity lastActivityGradientVariant hideSeeMore />
      </ContentContainer>
    </Container>
  );
};

export default HistoryScreen;
