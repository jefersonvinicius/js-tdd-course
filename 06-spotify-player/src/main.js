import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import spotify from './Spotify';

const albums = spotify.search.albums('J Balvin');
const albumsList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

const album = spotify.album.getAlbum('11GmvpYnbgK0rSryPaV5BP');

albums.then((data) => renderAlbums(data.albums.items, albumsList));
album.then((data) => renderAlbumInfo(data, albumInfo));
