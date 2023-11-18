import { Linking, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import Nav from "../../components/Nav";
import GradientBackground from "../../components/GradientBackground";
import {
  Container,
  Scroll,
  ImageContainer,
  CarImage,
  ProgressBar,
  Value,
  TotalValueLabel,
} from "./styles";
import ServicesGridButtons from "../../components/ServicesGridButtons";
import LastActivity from "../../components/LastActivity";
import Button from "../../components/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useRef, useState } from "react";
import ParkingDetailsBottomSheet from "../../components/ParkingDetailsBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { useCameraPermission } from "react-native-vision-camera";
import { requestForegroundPermissionsAsync } from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FreePeriodModal from "../../components/FreePeriodModal";

type HomeScreenProps = {
  route: {
    params: {
      ticketCode: string;
      resetMode?: boolean;
    };
  };
};

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [homeMode, setHomeMode] = useState<
    "WAITING_PAYMENT" | "NORMAL" | "FREE_PERIOD"
  >("NORMAL");
  const [freePeriodTimer, setFreePeriodTimer] = useState({
    minutes: "00",
    seconds: "00",
  });
  const [showFreePeriodModal, setShowFreePeriodModal] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();

  const askCameraPermission = async () => {
    if (hasPermission === false) {
      const askPermission = await requestPermission();
      if (askPermission === false) {
        await Linking.openSettings();
      }
    }

    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      await Linking.openSettings();
      return;
    }
  };

  useEffect(() => {
    askCameraPermission();
  }, []);

  useEffect(() => {
    const handleTicketTimer = (ticketCreatedAt: number) => {
      const interval = setInterval(() => {
        const timeDiff = ticketCreatedAt - new Date().getTime();

        const diffSeconds = timeDiff / 1000;
        const secondBetweenTimes = Math.abs(diffSeconds);
        const minutesBetweenTimes = secondBetweenTimes / 60;

        const format = (value: string) => {
          if (value.length < 2) {
            value = `0${value}`;
          }
          return value;
        };

        setFreePeriodTimer({
          minutes: format(Math.floor(minutesBetweenTimes).toString()),
          seconds: format(Math.floor(secondBetweenTimes % 60).toString()),
        });

        if (minutesBetweenTimes < 1) {
          setHomeMode("FREE_PERIOD");
        } else {
          setHomeMode("WAITING_PAYMENT");
          clearInterval(interval);
        }
      }, 1000);
    };

    const handleTicketCode = async () => {
      const ticketCode = props.route.params?.ticketCode;
      if (ticketCode) {
        setShowFreePeriodModal(true);

        const id = uuid.v4() as string;
        const ticketCreatedAt = new Date().getTime();
        await firestore().collection("tickets").doc(id).set({
          code: ticketCode,
          createdAt: ticketCreatedAt,
        });

        handleTicketTimer(ticketCreatedAt);
        await AsyncStorage.setItem("ticketId", id);
        setHomeMode("FREE_PERIOD");
      } else {
        const existingTicketId = await AsyncStorage.getItem("ticketId");
        if (existingTicketId) {
          const hasValidTicket = await firestore()
            .collection("tickets")
            .doc(existingTicketId)
            .get();
          if (hasValidTicket.exists) {
            handleTicketTimer(
              new Date((hasValidTicket.data() as any).createdAt).getTime()
            );
          } else {
            await AsyncStorage.removeItem("ticketId");
          }
        }
      }
    };

    handleTicketCode();
  }, [props]);

  useEffect(() => {
    if (props?.route?.params?.resetMode) {
      setHomeMode("NORMAL");
    }
  }, [props]);

  const handleServiceSeeMorePress = () => {
    bottomSheetRef.current?.expand();
  };

  if (showFreePeriodModal) {
    const handleButtonPress = () => setShowFreePeriodModal(false);
    return <FreePeriodModal onButtonPress={handleButtonPress} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GradientBackground>
        <Scroll>
          <StatusBar translucent style="light" />
          <Container>
            <Nav />
            <ImageContainer>
              <CarImage source={require("../../assets/img/mercedes.png")} />
              <ProgressBar
                source={require("../../assets/img/progress-bar-white.png")}
                resizeMode="contain"
              />
              {homeMode == "FREE_PERIOD" && (
                <>
                  <Value hasMarginTop>
                    {freePeriodTimer.minutes}:{freePeriodTimer.seconds}
                  </Value>
                  <Button label="Tempo ativado" variant="success" />
                </>
              )}
              {homeMode == "WAITING_PAYMENT" && (
                <>
                  <TotalValueLabel>Valor total:</TotalValueLabel>
                  <Value>R$16,92</Value>
                  <Button
                    label="Ver detalhes"
                    variant="info"
                    height={60}
                    onPress={() => navigation.navigate("PAYMENT_DETAILS")}
                  />
                </>
              )}
            </ImageContainer>
            <ServicesGridButtons
              hideSeeMore={homeMode == "NORMAL"}
              onPressSeeMore={handleServiceSeeMorePress}
            />
            <View style={{ marginTop: 38 }} />
            <LastActivity />
          </Container>
        </Scroll>

        <ParkingDetailsBottomSheet ref={bottomSheetRef} />
      </GradientBackground>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
