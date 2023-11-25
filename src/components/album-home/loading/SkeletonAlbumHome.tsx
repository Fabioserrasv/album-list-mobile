
import { Artist, Container, Info, SongName } from './skeleton-album-home.styles';

export function SkeletonAlbumHome() {
  return (
    <Container>
      <Info>
        <SongName />
        <Artist />
      </Info>
    </Container>
  )
}
