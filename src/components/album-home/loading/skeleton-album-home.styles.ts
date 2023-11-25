import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 250px;
  background-color: #ececec;
  margin-bottom: 5px;
  position: relative;
`;

export const Artist = styled.View`
  height: 15px;
  width: 50px;
  background-color: #dcdcdc;
`;

export const SongName = styled.Text`
  height: 18px;
  font-weight: bold;

  width: 150px;
  background-color: #dcdcdc;
`;
export const Info = styled.View`
  position: absolute;
  bottom: 0px;
  padding: 5px;
  gap: 5px;
`;
