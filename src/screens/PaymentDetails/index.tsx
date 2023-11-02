import GradientBackground from "../../components/GradientBackground";
import Back from "../../assets/svg/back.svg";
import {
  Card,
  BackContainer,
  CarImage,
  CarImageContainer,
  Divider,
  Title,
  SubTitle,
  SectionText,
  Text,
  Row,
  BottomContainer,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const PaymentDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <SafeAreaView>
        <BackContainer onPress={() => navigation.goBack()}>
          <Back />
        </BackContainer>
      </SafeAreaView>
      <Card>
        <CarImageContainer>
          <CarImage source={require("../../assets/img/mercedes.png")} />
        </CarImageContainer>
        <Title>G2-64</Title>
        <SubTitle>Primeiro piso, setor G</SubTitle>
        <Divider />
        <Row>
          <View style={{ flex: 1 }}>
            <SectionText>Duração</SectionText>
            <Text size="big">1h42min</Text>
          </View>
          <View style={{ flex: 1 }}>
            <SectionText>Valor</SectionText>
            <Text>R$0,08/min</Text>
            <Text size="big">Total: R$16,92</Text>
          </View>
        </Row>
        <Divider />
        <SectionText>Estabelecimento</SectionText>
        <Text size="med">Park Shopping de Brasília</Text>
        <Divider />
        <SectionText>Localização</SectionText>
        <Text size="med">QS 07, Lote 01, Taguatinga Sul - 71966-700</Text>
        <View style={{ flex: 1 }} />

        <BottomContainer>
          <Button label="Pagar" height={60} width={260} />
        </BottomContainer>

        <View style={{ marginTop: 24 }} />
      </Card>
    </GradientBackground>
  );
};

export default PaymentDetailsScreen;
