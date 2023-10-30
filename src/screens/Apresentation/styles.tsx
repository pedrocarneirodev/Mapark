import styled from "styled-components/native";

export const OuterCircle = styled.View`
  margin-top: 80px;

  width: 360px;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleCircle = styled.View`
  width: 75%;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.View`
  width: 75%;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 180px;

  position: relative;
`;

export const Image = styled.Image`
  position: absolute;

  top: -27px;
  left: -120px;
`;

export const Message = styled.Text`
  color: white;
  font-family: "Roboto_400Regular";
  font-size: 30px;
  padding-right: 32px;
  padding-left: 32px;
  margin: auto;
`;

export const BottomContainer = styled.View`
  padding-left: 46px;
  padding-right: 46px;
  padding-bottom: 32px;
`;
