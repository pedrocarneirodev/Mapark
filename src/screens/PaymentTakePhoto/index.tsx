import usePreventGoBack from "../../hooks/usePreventGoBack";
import { Linking, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import PayLineMask from "./components/PayLineMask";
import BackButtonNav from "../../components/BackButtonNav";
import { BottomText, TopText } from "./styles";

const PaymentTakePhotoScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  const askCameraPermission = async () => {
    if (hasPermission === false) {
      const askPermission = await requestPermission();
      if (askPermission === false) {
        await Linking.openSettings();
      }
    }
  };

  if (device == null) {
    askCameraPermission();

    return (
      <SafeAreaView>
        <Text>
          Habilite a permissao para camera nas configuracoes do dispositivo
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent barStyle={"light-content"} />
      <Camera
        device={device}
        isActive={true}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        codeScanner={codeScanner}
      />

      <PayLineMask />

      <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
        <BackButtonNav />
        <TopText>Esquanear código de barras</TopText>
        <View style={{ flex: 1 }} />
        <BottomText>Aproxime o seu código de barras na tela</BottomText>
      </SafeAreaView>
    </View>
  );
};

export default PaymentTakePhotoScreen;
