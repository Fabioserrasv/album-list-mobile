import { Page } from "@/components/page/Page";
import { AppStackParamList, ROUTE } from "@/config/route";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlbumImage, AlbumInfo, AlbumInfoText, AlbumTitle, AlbumTrackName, AlbumTracks, Container } from './album.styles';
import { getImageExtraLarge } from "@/utils/utils";
import { LastmService } from "@/services/lastfm-service";
import { useQuery } from "react-query";
import { AlbumService } from "@/services/album-service";
import { AlbumCommentService } from "@/services/album-comment-service";

import { Album as AlbumEntity } from "../../entities/album";
import { Comment } from "../../entities/comment";
import { InputGroup } from "@/components/form/input-group/InputGroup";
import { InputButton } from "@/components/input-button/InputButton";
import { Text } from "react-native";
import { useCallback, useState } from "react";
import { InputNumberButton } from "@/components/input-button/input-number-button";

type RouteName = typeof ROUTE.APP.ALBUM_DETAIL;
type AlbumScreenProps = NativeStackScreenProps<AppStackParamList, RouteName>;


type AlbumDetail = AlbumEntity & {
  score: number | null;
  comments: Comment[];
}


export class GithubApiServiceError extends Error {
  constructor(message: string) {
    super();
    this.name = "GithubApiServiceError";
    this.message = message;
  }
}

export default function Album({ route }: AlbumScreenProps) {
  const { artist, album: albumName } = route.params;
  const [isSending, setIsSending] = useState(false);

  const { data: album, isLoading, isError } = useQuery({
    queryKey: [artist, albumName],
    queryFn: () => Promise.all([
      LastmService.getAlbumInfo(albumName, artist),
      AlbumService.getScore(albumName, artist),
      AlbumCommentService.getCommentsBy(albumName, artist)
    ]),
    select([album, score, comments]): AlbumDetail {
      return {
        ...album,
        score,
        comments
      }
    }
  });


  const handleSubmitScore = useCallback(async (score: number) => {
    if (!album) {
      return;
    }

    try {
      setIsSending(true);
      await AlbumService.sendScore(Number(score), album);

    } catch (e: any) {
    } finally {
      setIsSending(false);
    }
  }, [album]);


  if (isLoading || isError || !album) {
    return <></>
  }

  return (
    <Page contentCenter>
      <AlbumImage
        source={{ uri: getImageExtraLarge(album.image) }}
      />
      <Container>
        <AlbumInfo>
          <AlbumTitle>{album.name}</AlbumTitle>
          <AlbumInfoText>Artista: {album.artist}</AlbumInfoText>
          <AlbumInfoText>Tipo: Album</AlbumInfoText>
          <AlbumInfoText>Média: __</AlbumInfoText>
        </AlbumInfo>

        <InputGroup label='Score Album'>
          <InputNumberButton
            min={0}
            max={10}
            onAction={handleSubmitScore}
            after={<Text>Send</Text>}
            initialValue={album.score || undefined}
          />
        </InputGroup>

        <AlbumTracks>
          {album.tracks && album.tracks.length > 0 && (
            <AlbumTitle>Músicas</AlbumTitle>
          )}
          {album.tracks?.map((track, index) => (
            <AlbumTrackName
              key={track.name}
              index={index}
            >
              {track.name}
            </AlbumTrackName>
          ))}
        </AlbumTracks>
      </Container>
    </Page>
  )
}
