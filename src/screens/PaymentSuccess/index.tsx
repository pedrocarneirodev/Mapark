import { StatusBar } from "react-native";
import BackButtonNav from "../../components/BackButtonNav";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientBackground from "../../components/GradientBackground";
import Check from "../../assets/svg/check.svg";
import { Content, BottomText } from "./styles";
import { useNavigation } from "@react-navigation/native";

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();
  return (
    <GradientBackground
      customColors={["hsla(134, 60%, 46%, 1)", "hsla(0, 0%, 0%, 1)"]}
      reverse
    >
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
        <StatusBar translucent barStyle={"light-content"} />
        <BackButtonNav
          onGoBack={() =>
            navigation.navigate("HOME", {
              resetMode: true,
            })
          }
        />
        <Content>
          <Check />
          <BottomText>Leitura com sucesso!</BottomText>
        </Content>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default PaymentSuccessScreen;
