import renderAlbums from './AlbumList';
import spotify from './Spotify';

const albums = spotify.search.albums('J Balvin');
const albumsList = document.getElementById('album-list');

albums.then((data) => renderAlbums(data.albums.items, albumsList));
