
const video = document.getElementById('backgroundVideo');
const button = document.querySelector('.play-toggle');

function togglePlay() {
  if (video.paused) {
    video.play();
    button.textContent = '⏸';
  } else {
    video.pause();
    button.textContent = '▶';
  }
}
function toggleMute() {
  const video = document.getElementById("backgroundVideo");
  const soundButton = document.querySelector(".sound-toggle");
  video.muted = !video.muted;
  soundButton.textContent = video.muted ? "🔇" : "🔊";
}
