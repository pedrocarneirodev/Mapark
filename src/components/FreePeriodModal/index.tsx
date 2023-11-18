import { StatusBar } from "expo-status-bar";

import Button from "../Button";
import GradientBackground from "../GradientBackground";
import {
  Image,
  InnerCircle,
  MiddleCircle,
  OuterCircle,
  Message,
  BottomContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type FreePeriodModalType = {
  onButtonPress: () => void;
};

const FreePeriodModal = (params: FreePeriodModalType) => {
  const navigation = useNavigation();

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

      <Message>Parabéns! você ganhou 10min de cortesia.</Message>

      <BottomContainer>
        <Button label="Próximo" onPress={params.onButtonPress} />
      </BottomContainer>
    </GradientBackground>
  );
};

export default FreePeriodModal;
