function createTrackMarkup(track) {
  return `<div class="music" data-preview-track="${track.preview_url}">
  <p class="music-number">${track.track_number}</p>
  <p class="music-title">${track.name}</p>
  <p class="music-duration">${track.duration_ms}</p>
</div>`;
}

function createMarkup(data) {
  return data.map(createTrackMarkup).join('\n');
}

export default function renderAlbumTracks(data, element) {
  element.innerHTML = createMarkup(data);
}
