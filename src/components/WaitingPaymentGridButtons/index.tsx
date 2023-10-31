import { View } from "react-native";
import {
  Title,
  LastActivityBox,
  LastActivityTitle,
  LastActivityText,
  LastActivityDate,
  KnowMore,
  Row,
  Box,
  BoxTitle,
} from "./styles";

const WaitingPaymentGridButtons = () => {
  return (
    <View>
      <Title>Atividade anterior</Title>
      <LastActivityBox>
        <LastActivityTitle>COCO BAMBU</LastActivityTitle>
        <Row>
          <View>
            <LastActivityText>COCO BAMBU</LastActivityText>
            <LastActivityDate>9 junho 2023, 10:00</LastActivityDate>
          </View>
          <LastActivityText>R$19,24</LastActivityText>
        </Row>
      </LastActivityBox>
      <KnowMore>Ver mais</KnowMore>

      <Row>
        <Box>
          <BoxTitle>Agendamento</BoxTitle>
        </Box>
        <Box>
          <BoxTitle>Histórico atividades</BoxTitle>
        </Box>
      </Row>
    </View>
  );
};

export default WaitingPaymentGridButtons;
