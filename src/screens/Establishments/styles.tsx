import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-left: 18px;
  padding-right: 18px;
`;

export const Title = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 20px;
  text-align: center;

  color: white;

  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Item = styled.TouchableOpacity`
  background-color: hsla(0, 0%, 85%, 0.15);
  border-radius: 10px;
  margin-bottom: 26px;
`;

export const ItemName = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 24px;
  font-weight: 600;

  color: white;

  padding: 24px;
  padding-left: 12px;
`;

export const ItemBottom = styled.View`
  background-color: black;
  display: flex;
  flex-direction: row;

  padding: 4px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ItemLocation = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 12px;
  font-weight: 600;

  color: white;

  text-align: center;
  flex: 1;
`;

export const ItemBusy = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 12px;
  font-weight: 600;

  color: white;

  text-align: center;
  flex: 1;
`;

export const Divider = styled.View`
  background-color: hsla(0, 0%, 100%, 0.2);
  width: 2px;
  border-radius: 4px;
`;
