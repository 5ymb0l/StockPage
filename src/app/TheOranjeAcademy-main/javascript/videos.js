//Hover play
const videos = document.querySelectorAll(".video");
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    console.log("Hello");
    video.playVideo();
  });
  video.addEventListener("mouseout", () => {
    video.target.pauseVideo();
  });
});
