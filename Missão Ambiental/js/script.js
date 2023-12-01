let img = document.getElementById("image-switch");
let imgs = ["./images/imgPessoal.png", "./images/imgAgroecologia.jpeg"];
let currentIndex = 0;

setInterval(function () {
  img.src = imgs[currentIndex];
  currentIndex = (currentIndex + 1) % imgs.length;
}, 8000);