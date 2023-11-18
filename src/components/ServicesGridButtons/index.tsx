import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Title,
  KnowMore,
  Row,
  Box,
  BoxTitle,
  MapIcon,
  ParkingIcon,
  LockIcon,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type ServicesGridButtons = {
  onPressSeeMore: () => void;
};

const ServicesGridButtons = (props: ServicesGridButtons) => {
  const { onPressSeeMore } = props;
  const navigation = useNavigation();

  return (
    <View>
      <Row center>
        <Title>Serviços</Title>
        <TouchableOpacity onPress={onPressSeeMore}>
          <KnowMore>Ver mais {">"}</KnowMore>
        </TouchableOpacity>
      </Row>

      <Row>
        <Box onPress={() => navigation.navigate("ESTABLISHMENTS")}>
          <ParkingIcon />
          <BoxTitle>Encontrar estacionamento</BoxTitle>
        </Box>
        <Box>
          <LockIcon />
          <BoxTitle>Segurança do automóvel</BoxTitle>
        </Box>
        <Box>
          <MapIcon />
          <BoxTitle>Buscar local de destino</BoxTitle>
        </Box>
      </Row>
    </View>
  );
};

export default memo(ServicesGridButtons);
