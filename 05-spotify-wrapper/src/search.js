import { API_URL } from './config';

export function search(query, type) {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${global.GLOBAL_SPOTIFY_TOKEN}`,
    },
  }).then((response) => response.json());
}

export function searchAlbums(query) {
  return search(query, 'album');
}

export function searchArtists(query) {
  return search(query, 'artist');
}

export function searchTracks(query) {
  return search(query, 'track');
}

export function searchPlaylists(query) {
  return search(query, 'playlist');
}
