import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef, useMemo, useRef } from "react";
import {
  Container,
  Col,
  Box,
  Row,
  WarnBox,
  Title,
  LocationText,
  WarnDescription,
} from "./styles";
import { View } from "react-native";

import QrCode from "../../assets/svg/qrcode.svg";
import MapButton from "../MapButton";
import { useNavigation } from "@react-navigation/native";

const ParkingDetailsBottomSheet = forwardRef<BottomSheet, {}>((_props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const navigation = useNavigation();

  return (
    <BottomSheet
      index={-1}
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: "hsla(210, 100%, 5%, 1)" }}
      handleIndicatorStyle={{ backgroundColor: "white", width: 45 }}
    >
      <Container>
        <Row>
          <Col>
            <Box size="big" color="light">
              <Title center>Localização do veículo</Title>
              <LocationText>G2-64</LocationText>
              <Title center>2° andar</Title>
            </Box>
            <Box size="small" color="dark">
              <Title center>Agendamento:</Title>
              <Title center size="big">
                20:00 - 20:30
              </Title>
            </Box>
          </Col>
          <Col>
            <Box size="small" color="dark">
              <Row center>
                <QrCode />
                <Title>Escanear{"\n"}QRcode</Title>
              </Row>
            </Box>
            <Box
              onPress={() => navigation.navigate("MAP")}
              size="big"
              color="light"
            >
              <MapButton />
            </Box>
          </Col>
        </Row>

        <WarnBox>
          <Title center size="big" black>
            ALERTA
          </Title>
          <WarnDescription>Clique para obter mais informações.</WarnDescription>
        </WarnBox>
      </Container>
    </BottomSheet>
  );
});

export default ParkingDetailsBottomSheet;
