const modelImage = document.querySelector(".model-image");

function updateImageSource() {
  if (window.innerWidth <= 768 && window.innerWidth >= 600) {
    modelImage.src = "assets/image-hero-tablet.png";
  } else if (window.innerHeight <= 599) {
    modelImage.src = "assets/image-hero-mobile.png";
  }
}

updateImageSource();
window.addEventListener("resize", updateImageSource);
