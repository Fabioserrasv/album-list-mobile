import { css, styled } from "styled-components/native";
import { TextInput } from "react-native";

export const ContainerInput = styled.View`
  display: flex;
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  border: 1px solid #000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 2px 5px;
  width: 80%;
  height: 35px;
`;

export const Button = styled.TouchableOpacity`
  width: 20%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;

  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: #d8dfe8;
      `;
    }

    return css`
      background-color: #1677ff;
    `;
  }}
`;
