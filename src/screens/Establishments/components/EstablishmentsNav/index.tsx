import Input from "../../../../components/Input";
import Close from "../../../../assets/svg/close.svg";

import { Container, CloseContainer, Title, Divider } from "./styles";
import { View } from "react-native";

type EstablishmentsNavProps = {
  onCloseIconPress: () => void;
};

const EstablishmentsNav = ({ onCloseIconPress }: EstablishmentsNavProps) => {
  return (
    <>
      <Container>
        <CloseContainer onPress={onCloseIconPress}>
          <Close />
        </CloseContainer>
        <Title>Estabelecimentos</Title>
      </Container>
      <Divider />

      <View style={{ marginBottom: 16 }} />
      <Input hasFilters />
    </>
  );
};

export default EstablishmentsNav;
