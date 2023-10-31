import styled from "styled-components/native";

import Search from "../../assets/svg/search.svg";

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
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIconChar = styled.Text`
  color: white;
  font-size: 24px;
`;

export const SearchIcon = styled(Search)``;

export const Text = styled.Text`
  color: white;
  font-size: 14px;
  font-family: "Roboto_400Regular";
`;
