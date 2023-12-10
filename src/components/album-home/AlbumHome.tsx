
import { Artist, Container, Info, Score, SongName } from './album-home.styles';

type AlbumHomeProps = {
  img: string;
  name: string;
  artist: string;
  score?: number;
}

export function AlbumHome({ artist, name, img, score }: AlbumHomeProps) {
  return (
    <Container source={{ uri: img }}>
      {
        score &&
        <Score>{score}</Score>
      }
      <Info>
        <SongName>{name}</SongName>
        <Artist>{artist}</Artist>
      </Info>
    </Container>
  )
}
