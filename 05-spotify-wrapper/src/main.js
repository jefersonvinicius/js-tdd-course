export const SPOTIFY_TOKEN =
  'BQCvpSYh1j_aZG5XlrFP4_gaoE0TDFObV0Tmn74PkS2r2UPelPS0qs0fjBZJn8CTdRynKH1kZ3mxBQl9c8Ch1jZ2Op_jFJqvNp01tsZcgQcl1JWmysLyWSdggY8yxlDycBuFsf4pdtsOhw6CXS6Vs7Nt4KlLmqnU9Ik';

export function search(query, type) {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
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
