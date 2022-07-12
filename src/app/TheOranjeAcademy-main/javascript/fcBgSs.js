const ImageSlider = document.getElementById("div-1");
let image = [];
let time = 4000;
let i = 0;
image[0] = "../images/FC/bg1.jpeg";
image[1] = "../images/FC/bg21.png";
image[2] = "../images/FC/bg3.png";
image[3] = "../images/FC/bg4.png";

imageSlide = () => {
  ImageSlider.style.backgroundImage = "url(" + image[i] + ")";

  console.log(image[i]);
  i < image.length - 1 ? i++ : (i = 0);
  setTimeout("imageSlide()", time);
};
window.onload = imageSlide;
