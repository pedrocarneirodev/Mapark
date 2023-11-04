import styled from "styled-components/native";

import Activity from "../../assets/svg/activity.svg";
import Cards from "../../assets/svg/cards.svg";
import Config from "../../assets/svg/config.svg";
import Help from "../../assets/svg/help.svg";
import Law from "../../assets/svg/law.svg";
import Support from "../../assets/svg/support.svg";

export const CloseContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  padding-right: 38px;
  padding-left: 38px;
  margin-top: 24px;
  margin-bottom: 52px;
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background-color: black;

  position: relative;

  padding-left: 12px;
  padding-right: 12px;
`;

export const UserContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  position: absolute;

  transform: translate(12px, -60px);
`;

export const UserIcon = styled.View`
  height: 120px;
  aspect-ratio: 1;
  border-radius: 60px;
  background-color: hsla(0, 0%, 74%, 1);
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIconChar = styled.Text`
  color: white;
  font-size: 52px;
`;

export const Name = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 16px;
  color: white;
  text-align: center;

  margin-top: 40px;
  margin-bottom: 22px;
`;

export const Row = styled.View<{ hasMarginBottom?: boolean }>`
  display: flex;
  flex-direction: row;

  gap: 14px;

  ${({ hasMarginBottom }) => hasMarginBottom && "margin-bottom: 20px;"}
`;

export const Box = styled.TouchableOpacity<{
  variant?: "info";
  center?: boolean;
}>`
  flex: 1;
  background-color: ${({ variant }) =>
    variant === "info" ? "hsla(209, 96%, 37%, 1)" : "hsla(0, 0%, 100%, 0.1)"};
  border-radius: 15px;

  padding-top: 12px;
  padding-bottom: 12px;

  ${({ center }) =>
    center
      ? `
    display: flex;
    justify-content: center;
    align-items: center;
  `
      : "padding: 20px;"}
`;

export const Text = styled.Text<{
  size?: "small" | `big`;
  marginBottom?: number;
  center?: boolean;
}>`
  font-family: "Roboto_500Medium";
  font-size: ${({ size }) => {
    if (size === "small") {
      return 13;
    }
    if (size === "big") {
      return 32;
    }

    return 16;
  }}px;
  color: white;

  ${({ center }) => center && "text-align: center;"}

  padding-bottom: ${({ marginBottom }) => marginBottom ?? 2} px;
`;

export const Divider = styled.View`
  background-color: hsla(0, 0%, 100%, 0.45);
  width: 100%;
  height: 2px;
  border-radius: 4px;

  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ActivityIcon = styled(Activity)`
  margin-bottom: 12px;
`;

export const CardsIcon = styled(Cards)`
  margin-bottom: 6px;
`;
export const HelpIcon = styled(Help)`
  margin-bottom: 12px;
`;
export const ConfigIcon = styled(Config)``;
export const LawIcon = styled(Law)``;
export const SupportIcon = styled(Support)``;
