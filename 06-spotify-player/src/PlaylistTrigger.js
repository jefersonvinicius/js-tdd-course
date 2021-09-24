const musicsList = document.getElementById('album-musics');

function pauseAudioIfPlaying(audio) {
  if (!audio.paused) audio.pause();
}

function clickedInCurrentMusic(target1, target2) {
  return target1 && target2 && target1.dataset.previewTrack === target2.dataset.previewTrack;
}

export default function setupPlaylistTrigger() {
  let audio = new Audio();
  let currentTargetMusic = null;

  musicsList.addEventListener('click', (event) => {
    const newTargetMusic = event.target.parentNode;

    if (clickedInCurrentMusic(newTargetMusic, currentTargetMusic)) {
      audio.pause();
      currentTargetMusic = null;
    } else {
      newTargetMusic.classList.add('active');

      pauseAudioIfPlaying(audio);
      audio = new Audio(newTargetMusic.dataset.previewTrack);
      audio.play();
      audio.addEventListener('pause', () => {
        newTargetMusic?.classList?.remove('active');
      });

      currentTargetMusic = newTargetMusic;
    }
  });
}
