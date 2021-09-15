import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from './search';
import { getAlbum, getAlbums, getAlbumTracks } from './album';
import { API_URL, register } from './config';

// export {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchPlaylists,
//   searchTracks,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks,
//   register,
// };

export default class SpotifyWrapper {
  constructor(options = {}) {
    if (!options.token) throw new TokenNotProvided();

    this.apiURL = options.apiURL ?? API_URL;
    this.token = options.token;
  }
}

export class TokenNotProvided extends Error {
  constructor() {
    super('Should token be provided to SpotifyWrapper constructor');
  }
}
