import { useCallback, useState } from "react";
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList, ROUTE } from "@/config/route";
import { Link } from "@/components/link/Link";

import { Page } from '@/components/page/Page';
import { InputGroup } from "@/components/form/input-group/InputGroup";
import { Input } from "@/components/form/input/Input";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LastmService } from "@/services/lastfm-service";
import { Button } from "@/components/button/Button";
import { AlbunsFoundContainer, SearchContainer } from "./home.styles";
import { AlbumHome } from "@/components/album-home/AlbumHome";
import { Album } from "@/entities/album";
import { getImageExtraLarge } from "@/utils/utils";


type RouteName = typeof ROUTE.APP.HOME;
type HomeProps = NativeStackScreenProps<AppStackParamList, RouteName>

const validationFormSearchAlbum = z
  .object({
    album: z.string().min(1, { message: "Album name is required." })
  })

type FormSearchAlbumData = z
          .infer<typeof validationFormSearchAlbum>;

export default function Home({ navigation }: HomeProps) {
  const [albums, setAlbums] = useState<Album[]>([]);



  const { control, handleSubmit, formState } = useForm<FormSearchAlbumData>({
    resolver: zodResolver(validationFormSearchAlbum),
    defaultValues: {
      album: ""
    },
  });

  const handleSubmitSearchAlbum: SubmitHandler<FormSearchAlbumData> = useCallback(async (data) => {
    try {
      const albunsFound = await LastmService.searchAlbum(data.album);
      setAlbums(albunsFound);
    } catch (e: any) {
      console.log(e)
    }
  }, [])

  return (
    <Page>
      <SearchContainer>
        <InputGroup label='Search Album' error={''} flex={3}>
          <Input name="album" control={control} />
        </InputGroup>
        <Button onClick={handleSubmit(handleSubmitSearchAlbum)} flex={1} >
          Search
        </Button >
      </SearchContainer>
      <AlbunsFoundContainer>
        {
          albums.map((album) => (
            <Link to={ROUTE.APP.TEST} params={undefined}>
              <AlbumHome
                key={album.url}
                artist={album.artist}
                name={album.name}
                img={getImageExtraLarge(album.image)}
              />
            </Link>
          ))
        }
      </AlbunsFoundContainer>
    </Page>
  )
}
