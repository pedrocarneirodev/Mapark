import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef, useMemo, useRef } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Col,
  Box,
  Row,
  WarnBox,
  Title,
  LocationText,
} from "./styles";

const ParkingDetailsBottomSheet = forwardRef<BottomSheet, {}>((_props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

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
              <LocationText center>G2-64</LocationText>
              <Title center>2° andar</Title>
            </Box>
            <Box size="small" color="dark"></Box>
          </Col>
          <Col>
            <Box size="small" color="dark"></Box>
            <Box size="big" color="light"></Box>
          </Col>
        </Row>

        <WarnBox></WarnBox>
      </Container>
    </BottomSheet>
  );
});

export default ParkingDetailsBottomSheet;
