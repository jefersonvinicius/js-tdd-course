// eslint-disable-next-line import/prefer-default-export
export const API_URL = 'https://api.spotify.com/v1';

export const register = (spotifyToken) => {
  global.GLOBAL_SPOTIFY_TOKEN = spotifyToken;
};
