import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
`;

export const UserIcon = styled.View`
  height: 42px;
  aspect-ratio: 1;
  border-radius: 21px;
  background-color: hsla(0, 0%, 74%, 0.72);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIconChar = styled.Text`
  color: white;
  font-size: 24px;
`;

export const LocationText = styled.Text`
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 14px;
  font-family: "Roboto_400Regular";
  padding-bottom: 2px;

  text-align: right;
`;

export const WellcomeText = styled.Text`
  color: white;
  font-size: 18px;
  font-family: "Roboto_400Regular";

  text-align: right;
`;

export const Divider = styled.View`
  background-color: hsla(0, 0%, 100%, 0.25);
  width: 100%;
  height: 2px;
  border-radius: 4px;

  margin-top: 24px;
  margin-bottom: 24px;
`;
