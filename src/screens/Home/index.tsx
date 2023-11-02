import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

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
import { useMemo, useRef } from "react";
import ParkingDetailsBottomSheet from "../../components/ParkingDetailsBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";

const MODE: string = "WAITING_PAYMENT"; // "NORMAL" | "FREE_PERIOD"

const HomeScreen = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleServiceSeeMorePress = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
              {MODE == "FREE_PERIOD" && (
                <>
                  <Value hasMarginTop>10:00</Value>
                  <Button label="Tempo ativado" variant="success" />
                </>
              )}
              {MODE == "WAITING_PAYMENT" && (
                <>
                  <TotalValueLabel>Valor total:</TotalValueLabel>
                  <Value>R$16,92</Value>
                  <Button label="Ver detalhes" variant="info" height={60} />
                </>
              )}
            </ImageContainer>
            <ServicesGridButtons onPressSeeMore={handleServiceSeeMorePress} />
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
