import { TouchableOpacity, View } from "react-native";
import {
  Container,
  Right,
  UserIcon,
  UserIconChar,
  LocationText,
  WellcomeText,
} from "./styles";
import Input from "../Input";

type NavProps = {
  onSearchIconPress: () => void;
};

const Nav = ({ onSearchIconPress }: NavProps) => {
  return (
    <>
      <Container>
        <Right>
          <View>
            <LocationText>Taguatinga, Brazil</LocationText>
            <WellcomeText>Bem-vindo, Pedro!</WellcomeText>
          </View>
        </Right>
        <UserIcon>
          <UserIconChar>P</UserIconChar>
        </UserIcon>
      </Container>
      <View style={{ marginBottom: 24 }} />
      <Input />
    </>
  );
};

export default Nav;
