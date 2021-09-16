import search from './search';
import album from './album';
import { API_URL, register } from './config';

export default class SpotifyWrapper {
  constructor(options = {}) {
    if (!options.token) throw new TokenNotProvided();

    this.apiURL = options.apiURL ?? API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    return fetch(url, headers);
  }
}

export class TokenNotProvided extends Error {
  constructor() {
    super('Should token be provided to SpotifyWrapper constructor');
  }
}
