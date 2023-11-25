import { styled, css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;
`;

export type ContentCenter = {
  contentCenter?: true;
};

export const Content = styled.View<ContentCenter>`
  flex: 1;
  width: 100%;

  ${(props) => {
    if (props.contentCenter) {
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }

    return "";
  }}
`;
