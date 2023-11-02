import { Platform, TouchableOpacity, View } from "react-native";
import {
  Container,
  Right,
  UserIcon,
  UserIconChar,
  LocationText,
  WellcomeText,
} from "./styles";
import Input from "../Input";
import { useNavigation } from "@react-navigation/native";

const Nav = () => {
  const navigation = useNavigation();

  const isAndroid = Platform.OS === "android";

  const onInputPress = () => navigation.navigate("ESTABLISHMENTS");

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
      {isAndroid ? (
        <TouchableOpacity onPress={onInputPress}>
          <Input editable={false} />
        </TouchableOpacity>
      ) : (
        <Input editable={false} onPressIn={onInputPress} />
      )}
    </>
  );
};

export default Nav;
