import { Flex, setDinamctlyFlex } from "@/layout/layout";
import { styled } from "styled-components/native";

export const Container = styled.View<Flex>`
  display: flex;
  flex-direction: column;
  margin: 5px 0px 5px 0px;
  width: 100%;
  flex: ${setDinamctlyFlex}
`

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`

export const Error = styled.Text`
  color: red;
  font-size: 10px;
`
