import { styled } from "styled-components/native";

/*
  Cinza: f5f5f5
  Azul: 001529
*/

type ContainerProps = {
  height?: number;
};

export const Container = styled.View<ContainerProps>`
  display: flex;

  height: ${(props) => (props.height ? `${props.height}px` : "300px")};

  width: 300px;
  background-color: #fff;

  border-radius: 10px;
`;
export const Title = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px 0px 20px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
  padding: 10px 20px;
  /* gap: 10px; */
`;
