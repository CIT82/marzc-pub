const fileInput = document.getElementById("fileInput");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const fullscreen = document.getElementById("fullscreen");

// Load video from file picker
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    videoSource.src = fileURL;
    videoPlayer.load();
    videoPlayer.play();
    playPause.textContent = "⏸"; // change button to pause
  }
});

// Play/Pause toggle
playPause.addEventListener("click", () => {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
    playPause.textContent = "⏸";
  } else {
    videoPlayer.pause();
    playPause.textContent = "▶";
  }
});

// Update progress bar
videoPlayer.addEventListener("timeupdate", () => {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progress.value = percent || 0;
});

// Seek video
progress.addEventListener("input", () => {
  const time = (progress.value / 100) * videoPlayer.duration;
  videoPlayer.currentTime = time;
});

// Volume control
volume.addEventListener("input", () => {
  videoPlayer.volume = volume.value;
});

// Fullscreen
fullscreen.addEventListener("click", () => {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
});
