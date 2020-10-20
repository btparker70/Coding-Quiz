//button that changes color. change div colors

var button = document.querySelector(".button");

function changeBlue(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}