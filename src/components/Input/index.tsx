import { Container, SearchIcon, TextInput } from "./styles";

type InputProps = {
  editable?: boolean;
  onPressIn?: () => void;
};

const Input = ({ editable, onPressIn }: InputProps) => {
  return (
    <Container>
      <SearchIcon width={20} />
      <TextInput
        placeholder="Buscar estabelecimento"
        placeholderTextColor="hsla(0, 0%, 60%, 1)"
        editable={editable}
        onPressIn={onPressIn}
      />
    </Container>
  );
};

export default Input;
