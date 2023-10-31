import Close from "../../assets/svg/close.svg";

import { Container, CloseContainer, Input, Divider } from "./styles";

const SearchNav = () => {
  return (
    <>
      <Container>
        <CloseContainer>
          <Close />
        </CloseContainer>

        <Input placeholder="Digite para buscar" autoCorrect={false} />
      </Container>
      <Divider />
    </>
  );
};

export default SearchNav;
