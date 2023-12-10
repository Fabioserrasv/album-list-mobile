import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
  padding: 20px;
  flex: 1;
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  background-color: black;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const ProfilePicture = styled.ImageBackground`
  width: 150px;
  aspect-ratio: 1/1;
  background-color: black;
  margin-top: auto;
  margin-left: 10px;
`;

export const ProfileInfo = styled.View`
  
`;

export const Username = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 5px;
  margin-left: 10px;
`;


