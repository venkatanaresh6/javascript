
const myImage = document.getElementById("my-image");

myImage.addEventListener("mouseover", function() {
  myImage.src = "./krsna.jpg";
});

myImage.addEventListener("mouseout", function() {
  myImage.src = "./radha.jpg";
});