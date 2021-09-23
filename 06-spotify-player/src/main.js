import renderAlbumInfo from './AlbumInfo';
import spotify from './Spotify';
import renderAlbumTracks from './AlbumTracks';
import setupSearchSubmitHandler from './SearchTrigger';

const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');

setupSearchSubmitHandler();

const album = spotify.album.getAlbum('11GmvpYnbgK0rSryPaV5BP');
album.then((data) => {
  renderAlbumInfo(data, albumInfo);
  renderAlbumTracks(data.tracks.items, albumTracks);
});
