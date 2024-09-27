// import { CLIENT_SECRET } from '@env'

/**
 * Configuration object for Spotify authentication.
 */
export const spotifyAuthConfig = {
  clientId: "2327b61dc63b4fc5a030e2909a3f6e70",
  clientSecret: "9afc14ae93de4a258af8272b262650de",
  redirectUrl: "com.mobile:/oauthredirect",
  scopes: [
    "playlist-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-follow-read",
    "user-read-playback-position",
    "user-follow-modify",
    "user-modify-playback-state",
  ],
  serviceConfiguration: {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  },
};

/**
 * An object that defines offset values for various categories,
 * used for managing infinite scrolling.
 */
export const offsets = {
  playlists: 8,
  podcasts: 5,
};
