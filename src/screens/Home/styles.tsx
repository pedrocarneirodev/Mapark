import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;

  margin-top: 12px;
  margin-bottom: 32px;

  position: relative;
`;

export const CarImage = styled.Image`
  height: 175px;
`;

export const ProgressBar = styled.Image`
  width: 100%;

  position: absolute;
  top: 125px;
`;

export const TotalValueLabel = styled.Text`
  margin-top: 16px;
  color: hsla(0, 0%, 100%, 1);

  font-family: "Roboto_500Medium";
  font-size: 14px;
`;

export const Value = styled.Text<{ hasMarginTop?: boolean }>`
  margin-top: ${({ hasMarginTop }) => (hasMarginTop ? 16 : 4)}px;
  margin-bottom: 18px;

  color: white;

  font-family: "Roboto_500Medium";
  font-size: 24px;
`;
