import { styled } from "styled-components/native";

export const Container = styled.ImageBackground`
  width: 100%;
  height: 250px;
  background-color: black;
  opacity: 0.8;
  margin-bottom: 5px;
  position: relative;
`;

export const Artist = styled.Text`
  font-size: 15px;
  color: white;
`;

export const SongName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
export const Info = styled.View`
  position: absolute;
  bottom: 0px;
  padding: 5px;
`;

export const Score = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: black;
`;
