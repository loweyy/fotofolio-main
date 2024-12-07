// Play/Pause Video
function togglePlay(videoId) {
    const video = document.getElementById(videoId);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Mute/Unmute Video
function toggleMute(videoId) {
    const video = document.getElementById(videoId);
    video.muted = !video.muted;
}

// Change Volume
function changeVolume(videoId, value) {
    const video = document.getElementById(videoId);
    video.volume = value;
}
