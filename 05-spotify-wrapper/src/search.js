import { API_URL } from './config';

function searcher(query, type) {
  return this.request(`${API_URL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    albums: (query) => searcher.bind(this, query, 'album')(),
    artists: (query) => searcher.bind(this, query, 'artist')(),
    tracks: (query) => searcher.bind(this, query, 'track')(),
    playlists: (query) => searcher.bind(this, query, 'playlist')(),
  };
}
