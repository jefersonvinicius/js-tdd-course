export function getAlbum(albumId) {
  return fetch(`https://api.spotify.com/v1/albums/${albumId}`).then((response) => response.json());
}

export function getAlbumTracks() {}
