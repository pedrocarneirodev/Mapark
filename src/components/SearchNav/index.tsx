import Close from "../../assets/svg/close.svg";

import { Container, CloseContainer, Input, Divider } from "./styles";

type SearchNavProps = {
  onCloseIconPress: () => void;
};

const SearchNav = ({ onCloseIconPress }: SearchNavProps) => {
  return (
    <>
      <Container>
        <CloseContainer onPress={onCloseIconPress}>
          <Close />
        </CloseContainer>

        <Input placeholder="Digite para buscar" autoCorrect={false} />
      </Container>
      <Divider />
    </>
  );
};

export default SearchNav;
