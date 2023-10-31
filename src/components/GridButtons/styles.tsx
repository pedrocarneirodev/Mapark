import styled from "styled-components/native";

export const NotificationArea = styled.View`
  background-color: hsla(209, 100%, 39%, 1);
  width: 100%;
  border-radius: 10px;

  padding: 12px;
`;

export const NotificationTitle = styled.Text`
  color: white;
  font-family: "Roboto_400Regular";
  font-size: 15px;
  text-align: center;
  margin-bottom: 8px;
`;

export const NotificationText = styled.Text`
  color: white;
  font-family: "Roboto_500Medium";
  font-size: 15px;
`;

export const NotificationHint = styled.Text`
  color: hsla(0, 0%, 100%, 0.75);
  font-family: "Roboto_500Medium";
  font-size: 12px;
  text-align: center;

  margin-top: 8px;
`;

export const Grid = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
`;

export const Col = styled.View`
  flex: 1;
`;

export const BigBox = styled.View`
  height: 120px;
  border-radius: 15px;
  background-color: red;
  margin-bottom: 14px;
`;

export const SmallBox = styled.View`
  background-color: red;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 14px;
`;

export const AlertArea = styled.View`
  height: 100px;
  width: 100%;
  background-color: hsla(40, 91%, 48%, 1);
  border-radius: 15px;
`;
