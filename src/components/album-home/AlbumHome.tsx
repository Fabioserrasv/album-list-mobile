
import { Artist, Container, Info, SongName } from './album-home.styles';

type AlbumHomeProps = {
  img: string;
  name: string;
  artist: string;
}

export function AlbumHome({ artist, name, img }: AlbumHomeProps) {
  return (
    <Container source={{ uri: img }}>
      <Info>
        <SongName>{name}</SongName>
        <Artist>{artist}</Artist>
      </Info>
    </Container>
  )
}
