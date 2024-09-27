// import { CLIENT_SECRET } from '@env'

/**
 * Configuration object for Spotify authentication.
 */
export const spotifyAuthConfig = {
  clientId: '7daaab95ed8a4075b87484c630c8d509',
  clientSecret: 'fffff',
  redirectUrl: 'com.mobile:/oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-follow-read',
    'user-read-playback-position',
    'user-follow-modify',
    'user-modify-playback-state',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
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
