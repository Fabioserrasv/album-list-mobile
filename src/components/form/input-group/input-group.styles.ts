import { styled } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 5px 0px 5px 0px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 10px;
`;
