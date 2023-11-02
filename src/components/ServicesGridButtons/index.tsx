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

const ServicesGridButtons = () => {
  return (
    <View>
      <Row center>
        <Title>Serviços</Title>
        <TouchableOpacity>
          <KnowMore>Ver mais {">"}</KnowMore>
        </TouchableOpacity>
      </Row>

      <Row>
        <TouchableOpacity style={{ flex: 1 }}>
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