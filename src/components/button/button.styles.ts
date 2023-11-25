import { styled } from "styled-components/native";
0
import { Flex, setDinamctlyFlex } from "@/layout/layout";

export const Button = styled.TouchableOpacity<Flex>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: #1677ff;
  margin: 10px 0px 10px 0px;
  flex: ${setDinamctlyFlex}
`

export const Text = styled.Text`
  color: #fff;
`
