const ImageSlider = document.getElementById("div-1");
let image = [];
let time = 4000;
let i = 0;
image[0] = "./images/Academy/22.png";
image[1] = "./images/Academy/20.png";
image[2] = "./images/Academy/211.png";
imageSlide = () => {
  ImageSlider.style.backgroundImage = "url(" + image[i] + ")";
  console.log(image[i]);
  i < image.length - 1 ? i++ : (i = 0);
  setTimeout("imageSlide()", time);
};
window.onload = imageSlide;
