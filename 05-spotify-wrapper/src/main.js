export function search(query, type) {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then((response) => response.json());
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

export function searchPlaylists() {}
