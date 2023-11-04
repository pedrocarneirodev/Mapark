import GradientBackground from "../../components/GradientBackground";
import Close from "../../assets/svg/close.svg";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, TouchableOpacity } from "react-native";

import {
  Card,
  CloseContainer,
  UserContainer,
  UserIcon,
  UserIconChar,
  Row,
  Box,
  Divider,
  Name,
  Text,
  ActivityIcon,
  CardsIcon,
  HelpIcon,
  ConfigIcon,
  SupportIcon,
  LawIcon,
} from "./styles";

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground reverse start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0 }}>
      <SafeAreaView>
        <CloseContainer onPress={() => navigation.goBack()}>
          <Close />
        </CloseContainer>
      </SafeAreaView>

      <Card>
        <UserContainer>
          <UserIcon>
            <UserIconChar>P</UserIconChar>
          </UserIcon>
        </UserContainer>

        <ScrollView
          style={{ marginTop: 32 }}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          <Name>Pedro Carneiro de Lima</Name>

          <Row hasMarginBottom>
            <Box>
              <Text marginBottom={18}>Dados gerais:</Text>
              <Row>
                <View>
                  <Text size="small">CPF: 412.965.002-78</Text>
                  <Text size="small">Gênero: Masculino</Text>
                  <Text size="small">E-mail: Fulano@gmail.com</Text>
                  <Text size="small">Veículo: Merces-Benz GLA 250</Text>
                </View>
              </Row>
            </Box>
          </Row>
          <Row hasMarginBottom>
            <Box center>
              <ActivityIcon />
              <Text>Atividade</Text>
            </Box>
            <Box center>
              <CardsIcon />
              <Text center>Minha Carteira</Text>
            </Box>
            <Box center>
              <HelpIcon />
              <Text>Ajuda</Text>
            </Box>
          </Row>
          <Row>
            <Box variant="info">
              <Text>N° placa:</Text>
              <Text size="big">BRA2E13</Text>
            </Box>
          </Row>

          <Divider />

          <TouchableOpacity>
            <Row hasMarginBottom>
              <ConfigIcon />
              <Text>Configurações</Text>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity>
            <Row hasMarginBottom>
              <SupportIcon />
              <Text>Fale conosco</Text>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity>
            <Row hasMarginBottom>
              <LawIcon />
              <Text>Jurítico</Text>
            </Row>
          </TouchableOpacity>
        </ScrollView>
      </Card>
    </GradientBackground>
  );
};

export default AccountScreen;
