import {
  Container,
  SearchIcon,
  TextInput,
  FilterContainer,
  Filter,
} from "./styles";

type InputProps = {
  editable?: boolean;
  hasFilters?: boolean;
  onPressIn?: () => void;
};

const Input = ({ editable, onPressIn, hasFilters }: InputProps) => {
  return (
    <Container>
      <SearchIcon width={20} />
      {hasFilters && (
        <FilterContainer>
          <Filter />
        </FilterContainer>
      )}
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
