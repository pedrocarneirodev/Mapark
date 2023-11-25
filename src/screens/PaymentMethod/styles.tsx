import styled from "styled-components/native";
import Pix from "../../assets/svg/pix.svg";
import Master from "../../assets/svg/master.svg";
import Visa from "../../assets/svg/visa.svg";
import Plus from "../../assets/svg/plus.svg";

export const Card = styled.View`
  width: 100%;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background-color: #d9d9d9;

  position: relative;

  padding-left: 12px;
  padding-right: 12px;

  padding-bottom: 52px;
`;

export const CarImageContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  transform: translateY(-115px);

  position: absolute;
  pointer-events: none;
`;

export const CarImage = styled.Image`
  height: 175px;
`;

export const ContentContainer = styled.View`
  margin-left: 24px;
  margin-right: 24px;
`;

export const PaymentMethodItem = styled.TouchableOpacity<{
  hideBorder?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0.6);
  border-bottom-width: ${({ hideBorder }) => (hideBorder ? 0 : 1)}px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const Title = styled.Text`
  margin-top: 64px;
  margin-bottom: 32px;
  color: #001537;

  font-family: "Roboto_700Bold";
  font-size: 20px;
`;

export const Text = styled.Text<{ variant?: "bold" }>`
  color: hsla(228, 10%, 31%, 1);
  font-family: ${({ variant }) => {
    if (variant === "bold") {
      return "Roboto_700Bold";
    }
    return "Roboto_500Medium";
  }};
`;

export const PixIcon = styled(Pix)``;
export const MasterIcon = styled(Master)``;
export const VisaIcon = styled(Visa)``;
export const PlusIcon = styled(Plus)``;
