import { Page } from "@/components/page/Page";
import { AppStackParamList, ROUTE } from "@/config/route";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Container, Header, ProfileInfo, ProfilePicture, Username } from "./profile.styles";
import { useAuth } from "@/hooks/contexts/useAuth";
import { useQuery } from "react-query";
import { ProfileService } from "@/services/profile-service";
import { AlbunsScroll } from "@/components/albuns-scroll/AlbunsFoundContainer";
import { SkeletonAlbumHome } from "@/components/album-home/loading/SkeletonAlbumHome";
import { Link } from "@/components/link/Link";
import { AlbumHome } from "@/components/album-home/AlbumHome";
import { getImage, getImageExtraLarge } from "@/utils/utils";
type RouteName = typeof ROUTE.APP.PROFILE;
type ProfileScreenProps = NativeStackScreenProps<AppStackParamList, RouteName>;



export default function Profile({ }: ProfileScreenProps) {
  const { user: userSession } = useAuth();

  const userSessionName = userSession?.name || "no-auth";

  const { data: user, isLoading, isError } = useQuery({
    queryKey: [userSessionName],
    keepPreviousData: true,
    queryFn: async () => {
      if (userSessionName === "no-auth") {
        return;
      }

      return ProfileService.getProfileInformation(userSessionName);
    },
  });

  if (isError || !user) {
    return <></>;
  }

  return (
    <Page contentCenter>
      <Header
        source={{ uri: "https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg" }}
      >
        <ProfilePicture
          source={{ uri: "https://pbs.twimg.com/media/FpsipsBXoAERFrX.jpg" }}
        />
        <ProfileInfo>
          <Username>{user.username}</Username>
        </ProfileInfo>
      </Header>
      <Container>
        <AlbunsScroll>
          {isLoading ? (
            Array(6).fill(null).map((_, index) => (
              <SkeletonAlbumHome key={index} />
            ))
          ) : (
            user.albums.map(({ album, artist, score }) => (
              <Link
                key={album.url}
                to={ROUTE.APP.ALBUM_DETAIL}
                params={{
                  album: album.name,
                  artist: artist.name
                }}
              >
                <AlbumHome
                  artist={artist.name}
                  name={album.name}
                  score={score}
                  img={getImage(album.imageUrl)}
                />
              </Link>
            ))
          )}

        </AlbunsScroll>
      </Container>
    </Page>
  )
}
