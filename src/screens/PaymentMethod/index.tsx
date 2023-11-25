import GradientBackground from "../../components/GradientBackground";
import Back from "../../assets/svg/back.svg";
import {
  Card,
  CarImage,
  CarImageContainer,
  Title,
  Text,
  PaymentMethodItem,
  ContentContainer,
  MasterIcon,
  PixIcon,
  PlusIcon,
  VisaIcon,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import BackButtonNav from "../../components/BackButtonNav";

const PaymentMethodScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <SafeAreaView style={{ marginHorizontal: 24, flex: 1 }}>
        <BackButtonNav />
      </SafeAreaView>
      <Card>
        <CarImageContainer>
          <CarImage source={require("../../assets/img/mercedes.png")} />
        </CarImageContainer>
        <ContentContainer>
          <Title>Forma de pagamento</Title>
          <PaymentMethodItem>
            <PixIcon />
            <Text>PIX</Text>
          </PaymentMethodItem>
          <PaymentMethodItem
            onPress={() => navigation.navigate("PAYMENT_TAKE_PHOTO")}
          >
            <VisaIcon />
            <Text>****5296(Débito)</Text>
          </PaymentMethodItem>
          <PaymentMethodItem
            onPress={() => navigation.navigate("PAYMENT_TAKE_PHOTO")}
          >
            <MasterIcon />
            <Text>****8743(Crédito)</Text>
          </PaymentMethodItem>
          <PaymentMethodItem hideBorder>
            <PlusIcon />
            <Text variant="bold">Adicionar Cartão de crédito</Text>
          </PaymentMethodItem>
        </ContentContainer>
      </Card>
    </GradientBackground>
  );
};

export default PaymentMethodScreen;
