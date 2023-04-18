import { changeBrushColor, changeBrushSize, changeEraserSize } from "./canvas.js";

const colors = [
  { color: "Black", rgb: "rgb(0, 0, 0)" },
  { color: "White", rgb: "rgb(255, 255, 255)" },
  { color: "Red", rgb: "rgb(255, 0, 0)" },
  { color: "Blue", rgb: "rgb(0, 0, 255)" },
  { color: "Green", rgb: "rgb(0, 128, 0)" },
  { color: "Yellow", rgb: "rgb(255, 255, 0)" },
  { color: "Orange", rgb: "rgb(255, 165, 0)" },
  { color: "Purple", rgb: "rgb(128, 0, 128)" },
  { color: "Light Blue", rgb: "rgb(173, 216, 230)" },
  { color: "Light Green", rgb: "rgb(144, 238, 144)" },
  { color: "Pink", rgb: "rgb(255, 192, 203)" },
  { color: "Gray", rgb: "rgb(128, 128, 128)" },
  { color: "Brown", rgb: "rgb(139, 69, 19)" },
  { color: "Teal", rgb: "rgb(0, 128, 128)" },
  { color: "Magenta", rgb: "rgb(255, 0, 255)" },
];

const colorsContainer = document.querySelector("#colors-container");
const lineWidthOptions = document.querySelector("#line-width-options");
const eraserWidthOptions = document.querySelector("#eraser-width-options");

colors.forEach((color) => {
  const div = document.createElement("div");
  div.classList.add("colors");
  div.style.backgroundColor = color.rgb;
  colorsContainer.appendChild(div);

  div.addEventListener("click", () => {
    checkActiveColor(div);
    div.classList.add("active");
    changeBrushColor(color.rgb);
  });
});

function checkActiveColor() {
  const divs = document.querySelectorAll(".colors");
  const filtered = [...divs].filter((div) => div.classList.contains("active"));
  if (filtered.length > 0) {
    filtered[0].classList.remove("active");
  }
}

lineWidthOptions.addEventListener("change", () => changeBrushSize(lineWidthOptions.value))

eraserWidthOptions.addEventListener("change", () => changeEraserSize(eraserWidthOptions.value))