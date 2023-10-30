import Button from "../../components/Button";
import GradientBackground from "../../components/GradientBackground";

import {
  LogoContainer,
  LogoIcon,
  ContantContainer,
  MapBackground,
  Title,
  Input,
  Text,
  Link,
  BottomContainer,
} from "./styles";

const LoginScreen = () => {
  return (
    <MapBackground source={require("../../assets/img/map.png")}>
      <GradientBackground customColors={["#000000AA", "hsl(209, 79%, 10%)"]}>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
        <ContantContainer>
          <Title>Cadastro:</Title>
          <Input placeholder="Digite o seu CPF" autoCorrect={false} />
          <Input
            placeholder="Digite a placa do seu automóvel"
            autoCorrect={false}
          />
          <Input
            placeholder="Crie uma senha"
            autoCorrect={false}
            secureTextEntry
          />

          <Text>
            Ao se inscrever você concorda com nossos{" "}
            <Link>Termos e Condições</Link> e{" "}
            <Link>Política de Privacidade</Link>
          </Text>

          <Button label="Se inscrever" />

          <BottomContainer>
            <Text>
              Já tem uma conta? <Link>Entrar</Link>
            </Text>
          </BottomContainer>
        </ContantContainer>
      </GradientBackground>
    </MapBackground>
  );
};

export default LoginScreen;
