import { StatusBar } from "expo-status-bar";

import Button from "../../components/Button";
import GradientBackground from "../../components/GradientBackground";
import {
  Image,
  InnerCircle,
  MiddleCircle,
  OuterCircle,
  Message,
  BottomContainer,
} from "./styles";

const ApresentationScreen = () => {
  return (
    <GradientBackground reverse>
      <StatusBar translucent />
      <OuterCircle>
        <MiddleCircle>
          <InnerCircle>
            <Image source={require("../../assets/img/volto.png")}></Image>
          </InnerCircle>
        </MiddleCircle>
      </OuterCircle>

      <Message>
        Seu Carro Sempre no Radar. Agora é o estacionamento que Acompanha
        Você!😉
      </Message>

      <BottomContainer>
        <Button label="Próximo" />
      </BottomContainer>
    </GradientBackground>
  );
};

export default ApresentationScreen;
