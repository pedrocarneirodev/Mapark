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
        <TouchableOpacity
          onPress={() => navigation.navigate("ESTABLISHMENTS")}
          style={{ flex: 1 }}
        >
          <Box>
            <ParkingIcon />
            <BoxTitle>Encontrar estacionamento</BoxTitle>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Box>
            <LockIcon />
            <BoxTitle>Segurança do automóvel</BoxTitle>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Box>
            <MapIcon />
            <BoxTitle>Buscar local de destino</BoxTitle>
          </Box>
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default ServicesGridButtons;
