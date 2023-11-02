import { Container, SearchIcon, TextInput } from "./styles";

const Input = () => {
  return (
    <Container>
      <SearchIcon width={20} />
      <TextInput
        placeholder="Buscar estabelecimento"
        placeholderTextColor="hsla(0, 0%, 60%, 1)"
      />
    </Container>
  );
};

export default Input;
