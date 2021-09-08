export function getAlbums(ids) {
  return fetch(`https://api.spotify.com/v1/albums/?ids=${ids}`).then((response) => response.json());
}

export function getAlbum(albumId) {
  return fetch(`https://api.spotify.com/v1/albums/${albumId}`).then((response) => response.json());
}

export function getAlbumTracks(id) {
  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`).then((response) => response.json());
}
