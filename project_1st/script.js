const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    changeColor(e.target.id);
  });
});

changeColor = (color) => {
  body.style.backgroundColor = color;
};

// const grey = document.getElementById("grey");
// const white = document.getElementById("white");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");

// const body = document.querySelector("body");

// grey.onclick = function () {
//   body.style.backgroundColor = "grey";
// };
// white.onclick = function () {
//   body.style.backgroundColor = "whit";
// };
// blue.onclick = function () {
//   body.style.backgroundColor = "blue";
// };
// yellow.onclick = function () {
//   body.style.backgroundColor = "yellow";
// };
