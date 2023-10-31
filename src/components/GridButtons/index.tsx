import { View } from "react-native";
import {
  NotificationArea,
  NotificationTitle,
  NotificationText,
  NotificationHint,
  Grid,
  Col,
  BigBox,
  SmallBox,
  AlertArea,
} from "./styles";

const GridButtons = () => {
  return (
    <View>
      <NotificationArea>
        <NotificationTitle>Notificação</NotificationTitle>
        <NotificationText>
          Você tem 10 min de contesia para aproveitar um de nossos
          estacionamentos.
        </NotificationText>
        <NotificationHint>
          Após esse período inicial, o valor do será contabilizado de acordo com
          as nossas tarifas padrão.
        </NotificationHint>
      </NotificationArea>

      <Grid>
        <Col>
          <BigBox></BigBox>
          <SmallBox></SmallBox>
        </Col>
        <Col>
          <SmallBox></SmallBox>
          <BigBox></BigBox>
        </Col>
      </Grid>

      <AlertArea></AlertArea>
    </View>
  );
};

export default GridButtons;
