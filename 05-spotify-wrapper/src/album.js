import { API_URL } from './config';

export function getAlbums(ids) {
  return fetch(`${API_URL}/albums/?ids=${ids}`).then((response) => response.json());
}

export function getAlbum(albumId) {
  return fetch(`${API_URL}/albums/${albumId}`).then((response) => response.json());
}

export function getAlbumTracks(id) {
  return fetch(`${API_URL}/albums/${id}/tracks`).then((response) => response.json());
}
