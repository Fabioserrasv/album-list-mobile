import { Flex } from '@/layout/layout';
import { Artist, Container, Info, SongName } from './album-home.styles';

type AlbumHomeProps = {
  img: string;
  name: string;
  artist: string;
} & Flex;

export function AlbumHome({ artist, name, img, flex }: AlbumHomeProps) {
  return (
    <Container source={{ uri: img }}>
      <Info>
        <SongName>{name}</SongName>
        <Artist>{artist}</Artist>
      </Info>
    </Container>
  )
}
