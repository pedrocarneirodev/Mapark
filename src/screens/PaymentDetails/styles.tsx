import styled from "styled-components/native";

export const BackContainer = styled.TouchableOpacity`
  padding: 24px;
  margin-bottom: 24px;

  z-index: 9999999;
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background-color: #d9d9d9;

  position: relative;

  padding-left: 12px;
  padding-right: 12px;
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

export const Divider = styled.View`
  background-color: hsla(0, 0%, 0%, 0.25);
  width: 100%;
  height: 2px;
  border-radius: 4px;

  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: 64px;
  color: #001537;

  font-family: "Roboto_700Bold";
  font-size: 40px;
`;

export const SubTitle = styled.Text`
  color: rgba(0, 0, 0, 0.75);

  font-family: "Roboto_500Medium";
  font-size: 16px;
`;

export const SectionText = styled.Text`
  color: rgba(0, 0, 0, 0.55);

  font-family: "Roboto_500Medium";
  font-size: 16px;

  margin-bottom: 12px;
`;

export const Text = styled.Text<{ size?: "big" | "med" }>`
  color: #001537;

  font-family: "Roboto_500Medium";
  font-size: ${({ size }) => {
    if (size === "big") {
      return 24;
    }
    if (size === "med") {
      return 20;
    }
    return 14;
  }}px;
`;

export const BottomContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;
