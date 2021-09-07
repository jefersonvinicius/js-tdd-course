export function search(query, type) {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then((response) => response.json());
}

export function searchAlbums() {}

export function searchArtists(query) {
  return search(query, 'artist');
}

export function searchTracks() {}

export function searchPlaylists() {}
