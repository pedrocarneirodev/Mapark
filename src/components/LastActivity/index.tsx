import { TouchableOpacity, View } from "react-native";
import {
  Title,
  Row,
  Box,
  GradientBox,
  BoxTitle,
  RegularText,
  ThinText,
  ValueText,
  EstableshmentIconChar,
  EstableshmentIcon,
  KnowMore,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type LastActivityProps = {
  hideSeeMore?: boolean;
  lastActivityGradientVariant?: boolean;
};

const LastActivity = ({
  hideSeeMore,
  lastActivityGradientVariant,
}: LastActivityProps) => {
  const navigation = useNavigation();

  const FirstBox = lastActivityGradientVariant
    ? ({ children }: any) => (
        <GradientBox colors={["hsl(209, 79%, 21%)", "#000"]} locations={[0, 1]}>
          {children}
        </GradientBox>
      )
    : Box;

  return (
    <View>
      <Row center>
        <Title>Atividade anterior</Title>
      </Row>

      <FirstBox>
        <BoxTitle>COCO BAMBU</BoxTitle>
        <Row center>
          <View>
            <RegularText>Restaurante</RegularText>
            <ThinText>9 junho 2023, 10:00</ThinText>
          </View>
          <ValueText>R$19,24</ValueText>
        </Row>
      </FirstBox>

      <TouchableOpacity>
        <Row center>
          <Row center>
            <EstableshmentIcon>
              <EstableshmentIconChar>P</EstableshmentIconChar>
            </EstableshmentIcon>
            <View>
              <RegularText>Parque da cidade</RegularText>
              <ThinText>3 Março 2023, 21:57</ThinText>
            </View>
          </Row>
          <ValueText>R$14,85</ValueText>
        </Row>
      </TouchableOpacity>
      <View style={{ marginTop: 24 }} />
      <TouchableOpacity>
        <Row center>
          <Row center>
            <EstableshmentIcon>
              <EstableshmentIconChar>T</EstableshmentIconChar>
            </EstableshmentIcon>
            <View>
              <RegularText>Taguatinga Shopping</RegularText>
              <ThinText>15 Agosto 2023, 8:30</ThinText>
            </View>
          </Row>
          <ValueText>R$12,09</ValueText>
        </Row>
      </TouchableOpacity>

      {!hideSeeMore && (
        <TouchableOpacity onPress={() => navigation.navigate("HISTORY")}>
          <KnowMore>Ver mais</KnowMore>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LastActivity;
