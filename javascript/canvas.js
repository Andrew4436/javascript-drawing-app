const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const eraser = document.querySelector("#eraser");
const pencil = document.querySelector("#pencil");
const customCursor = document.querySelector("#custom-cursor");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.85;

let currentX, currentY;
let endX, endY;

let eraserWidth = 50,
  eraserHeight = 50;
let lineWidth = 5;

let strokeColor = "black";

let canDraw = false;

let erasing = false;

const canvasRect = canvas.getBoundingClientRect();

document.addEventListener("mousedown", (e) => {
  canDraw = true;
  endX = e.clientX - canvasRect.x;
  endY = e.clientY - canvasRect.y;
});

document.addEventListener("mouseup", (e) => {
  canDraw = false;
});

document.addEventListener("mousemove", draw);

document.addEventListener("mousemove", erase);

eraser.addEventListener("click", (e) => {
  if(e.target.id === 'eraser-width-options') return  
  erasing = true;
});

pencil.addEventListener("click", (e) => {
  if(e.target.id === 'pencil-width-options') return  
  erasing = false;
  customCursor.style.display = 'none'
});

//functions
function draw(e) {
  if (!canDraw || erasing) return;

  ctx.strokeStyle = strokeColor;

  currentX = e.clientX - canvasRect.x;
  currentY = e.clientY - canvasRect.y;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(endX, endY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();

  endX = currentX;
  endY = currentY;
}

function changeBrushColor(color) {
  strokeColor = color;
}

function changeBrushSize(size) {
  lineWidth = size;
}

function erase(e) {
  if (!erasing) return;

  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.width = eraserWidth + "px"
  customCursor.style.height = eraserHeight + "px"

  customCursor.style.display = 'block'  

  if (canDraw) {
    currentX = e.clientX - canvasRect.x;
    currentY = e.clientY - canvasRect.y;
    ctx.clearRect(
      currentX - eraserWidth / 2,
      currentY - eraserHeight / 2,
      eraserWidth,
      eraserHeight
    );
  }
}

function changeEraserSize(size) {
    eraserWidth = size * 5;
    eraserHeight = size * 5;
}

export { changeBrushColor, changeBrushSize, changeEraserSize };
