const backImgContainer = document.querySelector(
  ".backgroundImg"
);
const backImg = document.createElement("img");
backImg.src = `img/${
  Math.floor(Math.random() * 10) + 1
}.jpg`;
backImgContainer.appendChild(backImg);
