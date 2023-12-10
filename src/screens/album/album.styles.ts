import { styled } from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
  padding: 20px;
  flex: 1;
`;

export const AlbumImage = styled.ImageBackground`
  width: 100%;
  height: 250px;
  background-color: black;
  opacity: 0.7;
  margin-bottom: 5px;
  position: relative;
`;

export const AlbumInfo = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const AlbumInfoText = styled.Text`
  font-size: 20px;
`;

export const AlbumTitle = styled.Text`
  font-size: 36px;
  font-weight: bold;
`;

export const AlbumTracks = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


type AlbumTrackNameProps = {
  index: number;
}

export const AlbumTrackName = styled.Text<AlbumTrackNameProps>`
  padding: 5px;
  background-color: ${({ index }) => index % 2 === 0 ? "#dfdfdf" : "#f5f5f5"}
`;
