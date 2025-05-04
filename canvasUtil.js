let canvas = document.getElementById("canvas");
let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidth = document.querySelector(".pencil-width-container input");
let eraserWidth = document.querySelector(".eraser-width-container input");

let pencilColorValue = "#ff0000"; // default color of the pencil - red
let eraserColorValue = "#ffffff"; // default color of the eraser - white
let eraserWidthValue = eraserWidth.value; // default width of the eraser - 10px
let pencilWidthValue = pencilWidth.value; // default width of the pencil - 5px

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse down
let mouseDown = false; // to check if the mouse is down or not

// ctx to draw on canvas where we can use the canvas API
let ctx = canvas.getContext("2d");

ctx.strokeStyle = pencilColorValue; // color of the line (fill color)
ctx.lineWidth = pencilWidthValue; // width of the line (stroke width)

// begin drawing
// point to start drawing
// point to end drawing
// set the color of the line (fill color)

// to add new line on top of the previous line
// draw a line to the point (200, 200)
// set the color of the line (fill color)

// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(100, 100);
// ctx.stroke = "";

// to make new line
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.stroke = "";

// mousedown event --> to start drawing
// mousemove event --> to draw on canvas (path fill or graphics)

function beginPathDraw(strokeObj) {
  ctx.beginPath(); // to start a new path
  ctx.moveTo(strokeObj.startX, strokeObj.startY); // to move the path to the point where we click on the canvas
}

canvas.addEventListener("mousedown", (e) => {
  mouseDown = true; // to check if the mouse is down or not
  beginPathDraw({ startX: e.clientX, startY: e.clientY }); // to start a new path
});

function drawStroke(strokeObj) {
  ctx.strokeStyle = strokeObj.color; // to set the color of the pencil
  ctx.lineWidth = strokeObj.width; // to set the width of the pencil

  ctx.lineTo(strokeObj.endX, strokeObj.endY); // to draw a line to the point where we move the mouse
  ctx.stroke(); // to fill the path with color
}

canvas.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    drawStroke({
      endX: e.clientX,
      endY: e.clientY,
      color: eraserFlag ? eraserColorValue : pencilColorValue,
      width: eraserFlag ? eraserWidthValue : pencilWidthValue, // to draw a line to the point where we move the mouse
    }); // to draw a line to the point where we move the mouse
  }
});

canvas.addEventListener("mouseup", (e) => {
  mouseDown = false; // to check if the mouse is down or not
  ctx.closePath(); // to close the path
});

pencilColor.forEach((color) => {
  color.addEventListener("click", (e) => {
    let colorValue = color.classList[0];
    pencilColorValue = colorValue; // to set the color of the pencil
    ctx.strokeStyle = pencilColorValue; // to set the color of the pencil
  });
});

pencilWidth.addEventListener("change", (e) => {
  pencilWidthValue = pencilWidth.value; // to set the width of the pencil
  ctx.lineWidth = pencilWidthValue; // to set the width of the pencil
});

eraserWidth.addEventListener("change", (e) => {
  eraserWidthValue = eraserWidth.value; // to set the width of the eraser
  ctx.lineWidth = eraserWidthValue; // to set the width of the eraser
});

eraserTool.addEventListener("click", (e) => {
  if (eraserFlag) {
    ctx.strokeStyle = eraserColorValue; // to set the color of the eraser
    ctx.lineWidth = eraserWidthValue; // to set the width of the eraser
  } else {
    ctx.strokeStyle = pencilColorValue; // to set the color of the pencil
    ctx.lineWidth = pencilWidthValue; // to set the width of the pencil
  }
});
