import { View } from "react-native";
import {
  Container,
  Right,
  UserIcon,
  UserIconChar,
  SearchIcon,
  Text,
} from "./styles";

const Nav = () => {
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
      <View>
        <SearchIcon />
      </View>
    </Container>
  );
};

export default Nav;
