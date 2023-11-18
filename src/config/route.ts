import { API_URL } from "./env"

export const ROUTE = {
  APP: {
    HOME: `/home`,
    SIGN_UP: `/signup`,
    SIGN_IN: `/sign-in`,
    LOGIN: `/login`,
    PROFILE: `/profile`,
    USER_PROFILE: `/profile/:username`,

    ALBUM_DETAIL: `/album/:artist/:album`,
    MY_LIST_ALBUMS: `/my-list-albums`,
    SEARCH_ALBUM: `/search-album`
  }
} as const

export const DYNAMIC_ROUTE = {
  APP: {
    ALBUM_DETAIL: (artist: string, album: string) => `/album/${artist}/${album}`,
    USER_PROFILE: (username: string) => `/profile/${username}`
  },
  API: {
    PROFILE_PICTURE: (path: string) => `${API_URL}${path}`
  }
}

export type AppStackParamList = {
  "/home": undefined;
  [ROUTE.APP.LOGIN]: undefined;
};
