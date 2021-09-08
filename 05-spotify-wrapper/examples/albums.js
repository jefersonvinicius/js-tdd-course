import { searchAlbums } from '../src/search';

global.fetch = require('node-fetch');

function extractArtistsLabelOf(album) {
  return album.artists.map((art) => art.name).join(', ');
}

const albums = searchAlbums('bahia');
albums
  .then((data) => {
    console.log(data.albums.items.map((a) => `${a.name} - ${extractArtistsLabelOf(a)}`));
  })
  .catch((error) => console.log(error.message));
