import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

function extractArtistsLabelOf(album) {
  return album.artists.map((art) => art.name).join(', ');
}

const spotify = new SpotifyWrapper({
  token:
    'BQCZtzyUnW8b6UFh0bK7M_ZLzRKBn5r16rwh4cszHQPjlSHDDFa3_SW624Y3Z2woPGaadbZBiyceXbjmJpi0vACV-vzZcEJjEnBZpr3tx34oVABNn2og2VY3Z0eyjsP2XqcSGy_AxIA0r-3FOWq2NcELcVF_ZkcxL2Q',
});

const albums = spotify.search.albums('bahia');
albums
  .then((data) => {
    console.log(data.albums.items.map((a) => `${a.name} - ${extractArtistsLabelOf(a)}`));
  })
  .catch((error) => console.log(error.message));
