import renderAlbums from './AlbumList';
import spotify from './Spotify';

const searchForm = document.getElementById('search-form');
const albumsList = document.getElementById('album-list');

export default function setupSearchSubmitHandler() {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = new FormData(event.target).get('query');
    spotify.search.albums(query).then((data) => {
      renderAlbums(data.albums.items, albumsList);
    });
  });
}
