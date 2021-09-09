import { API_URL } from './config';

export const SPOTIFY_TOKEN =
  'BQDZHvfPYCMbD1UuESlf5p2Y7SIPb5a0NO1GBPGO2Z34DF3N9QDbUi6B7aLcf3fvNm6LpLcTCTLnrCMYeTsLL7KPYWdrC_J3oBxK3yrigYzSyhzLW9ztrlkP-pmyk5pG5tx0yzyWPDKq3vRxUvwDo8ovf0vjB7JEXJk';

export function search(query, type) {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${SPOTIFY_TOKEN}`,
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
