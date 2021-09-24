import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import spotify from './Spotify';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId).then((data) => {
    renderAlbumInfo(data, albumInfo);
    renderAlbumTracks(data.tracks.items, albumTracks);
  });
}

export default function setupSelectAlbumTrigger() {
  listAlbums.addEventListener('click', (event) => {
    const { albumId } = event.target.dataset;
    makeRequest(albumId);
  });
}
