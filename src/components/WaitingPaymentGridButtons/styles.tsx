import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 24px;

  color: white;

  margin-bottom: 20px;
`;

export const LastActivityBox = styled.View`
  background-color: hsla(209, 100%, 14%, 1);
  border-radius: 15px;
  padding: 12px;

  elevation: 12;
`;

export const KnowMore = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 16px;
  text-align: center;
  color: white;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const LastActivityTitle = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 24px;
  text-align: center;
  color: white;
`;

export const LastActivityText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 18px;
  color: white;
`;

export const LastActivityDate = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 14px;
  color: hsla(0, 0%, 75%, 1);
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

export const Box = styled.View`
  background-color: hsla(0, 0%, 0%, 0.65);
  border-radius: 10px;
  padding: 14px;

  flex: 1;

  height: 100%;
`;

export const BoxTitle = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 18px;
  color: white;
  text-align: center;
`;
