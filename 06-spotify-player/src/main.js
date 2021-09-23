import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import spotify from './Spotify';
import renderAlbumTracks from './AlbumTracks';

const albumsList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');

const albums = spotify.search.albums('J Balvin');
albums.then((data) => renderAlbums(data.albums.items, albumsList));

const album = spotify.album.getAlbum('11GmvpYnbgK0rSryPaV5BP');
album.then((data) => {
  renderAlbumInfo(data, albumInfo);
  renderAlbumTracks(data.tracks.items, albumTracks);
});
