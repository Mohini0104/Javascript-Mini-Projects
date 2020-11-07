const button = document.getElementById("button");
const body = document.querySelector("body");
body.style.backgroundColor = "#F4E2D8";
button.addEventListener("click", changeBackground);
const color = [
  "#00d2ff",
  "#3a7bd5",
  "#b92b27",
  "#89216B",
  "#23074d",
  "#FF8235",
  "#2C7744",
];
function changeBackground() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
