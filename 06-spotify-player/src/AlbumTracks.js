import convertToHumanTime from './ConvertToHumanTime';

function createTrackMarkup(track) {
  return `<div class="music" data-preview-track="${track.preview_url}">
  <p class="music-number" data-preview-track="${track.preview_url}">${track.track_number}</p>
  <p class="music-title" data-preview-track="${track.preview_url}">${track.name}</p>
  <p class="music-duration" data-preview-track="${track.preview_url}">${convertToHumanTime(track.duration_ms)}</p>
</div>`;
}

function createMarkup(data) {
  return data.map(createTrackMarkup).join('\n');
}

export default function renderAlbumTracks(data, element) {
  element.innerHTML = createMarkup(data);
}
