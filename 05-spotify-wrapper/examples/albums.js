import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums();
albums.then((data) => console.log(data)).catch((error) => console.log(error.message));
