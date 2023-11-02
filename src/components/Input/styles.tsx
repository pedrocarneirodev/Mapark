import styled from "styled-components/native";

import Search from "../../assets/svg/search.svg";

export const Container = styled.View`
  position: relative;
`;

export const TextInput = styled.TextInput`
  color: white;
  padding: 12px 48px;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 10px;
  height: 45px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;

  top: 10px;
  left: 16px;
`;
