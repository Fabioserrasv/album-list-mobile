import { useCallback, useState } from "react";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from "@/config/route";
import { Link } from "@/components/link/Link";

import { Page } from '@/components/page/Page';
import { InputGroup } from "@/components/form/input-group/InputGroup";

import { LastmService } from "@/services/lastfm-service";
import { AlbunsFoundContainer, SearchContainer } from "./home.styles";
import { AlbumHome } from "@/components/album-home/AlbumHome";
import { Album } from "@/entities/album";
import { getImageExtraLarge } from "@/utils/utils";
import { InputSearch } from "@/components/input-search/InputSearch";
import { SkeletonAlbumHome } from "@/components/album-home/loading/SkeletonAlbumHome";

type RouteName = typeof ROUTE.APP.HOME;
type HomeProps = NativeStackScreenProps<AppStackParamList, RouteName>;

export default function Home({ navigation }: HomeProps) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchAlbum = useCallback(async (albumName: string) => {
    try {
      setIsSearching(true);
      const albunsFound = await LastmService.searchAlbum(albumName);
      setAlbums(albunsFound);
    } catch (e: any) {
      console.log(e)
    } finally {
      setIsSearching(false);
    }
  }, []);

  return (
    <Page>
      <SearchContainer>
        <InputGroup label='Search Album'>
          <InputSearch onSearch={handleSearchAlbum} />
        </InputGroup>
      </SearchContainer>

      <AlbunsFoundContainer>
        {isSearching ? (
          Array(6).fill(null).map((_, index) => (
            <SkeletonAlbumHome key={index} />
          ))
        ) : (
          albums.map((album) => (
            <Link
              key={album.url}
              to={ROUTE.APP.ALBUM_DETAIL}
              params={{
                album: album.name,
                artist: album.artist
              }}
            >
              <AlbumHome
                artist={album.artist}
                name={album.name}
                img={getImageExtraLarge(album.image)}
              />
            </Link>
          ))
        )}

      </AlbunsFoundContainer>
    </Page>
  )
}
