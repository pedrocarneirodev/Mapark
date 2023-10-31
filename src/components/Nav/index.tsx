import { TouchableOpacity, View } from "react-native";
import {
  Container,
  Right,
  UserIcon,
  UserIconChar,
  SearchIcon,
  Text,
} from "./styles";

type NavProps = {
  onSearchIconPress: () => void;
};

const Nav = ({ onSearchIconPress }: NavProps) => {
  return (
    <Container>
      <Right>
        <UserIcon>
          <UserIconChar>P</UserIconChar>
        </UserIcon>
        <View>
          <Text>Olá, Pedro!</Text>
          <Text>Merces-Benz GLA-250</Text>
        </View>
      </Right>
      <TouchableOpacity onPress={onSearchIconPress}>
        <SearchIcon />
      </TouchableOpacity>
    </Container>
  );
};

export default Nav;
