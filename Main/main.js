// Obtener referencias a los elementos de video
const videos = document.querySelectorAll("video");

// Función para detener todos los videos excepto el que se está reproduciendo
function stopOtherVideos(currentVideo) {
  videos.forEach((video) => {
    if (video !== currentVideo && !video.paused) {
      video.pause();
    }
  });
}

// Asignar el evento 'play' a cada video
videos.forEach((video) => {
  video.addEventListener("play", () => {
    stopOtherVideos(video);
  });
});
