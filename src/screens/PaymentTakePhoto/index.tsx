import { useState } from "react";
import firestore from "@react-native-firebase/firestore";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PaymentTakePhotoScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
  const navigation = useNavigation();
  const [bottomText, setBottomText] = useState(
    "Aproxime o seu código de barras na tela"
  );

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13", "code-128", "code-39"],
    onCodeScanned: async () => {
      setBottomText("Código de barras encontrado");
      const existingTicketId = await AsyncStorage.getItem("ticketId");
      if (existingTicketId) {
        await firestore().collection("tickets").doc(existingTicketId).delete();
        await AsyncStorage.removeItem("ticketId");

        navigation.navigate("PAYMENT_SUCCESS");
      }
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
        <BottomText>{bottomText}</BottomText>
      </SafeAreaView>
    </View>
  );
};

export default PaymentTakePhotoScreen;
