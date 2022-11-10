const DEFCOLOR = "#2164cf";
const DEFSIZE = 16;
const DEFMODE = "color-mode"

const canvas = document.getElementById("canvas");

let sliderListener = document.getElementById("size-slider").addEventListener("input", sizeChange);
let gridChange = document.getElementById("size-slider").addEventListener("change", generateGrid);
let colorListener = document.getElementById("color-picker").addEventListener("change", colorChange);

let currentColor = DEFCOLOR;
let currentMode = DEFMODE;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const colorMode = document.getElementById("color-mode");
const rainbowMode = document.getElementById("rainbow-mode");
const eraserMode = document.getElementById("eraser-mode");
const clear = document.getElementById("clear");

clear.onclick = () => generateGrid();
colorMode.onclick = () => setCurrentMode("color-mode");
rainbowMode.onclick = () => setCurrentMode("rainbow-mode");
eraserMode.onclick = () => setCurrentMode("eraser-mode");

generateGrid();

function sizeChange() {
  let size = document.getElementById("size-slider").value;

  document.getElementById("size-value").textContent = size + " x " + size;
}

function colorChange() {
  currentColor = document.getElementById("color-picker").value;

  console.log(currentColor);
}

function generateGrid() {
  let size = document.getElementById("size-slider").value;

  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
  
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", colorGrid);
    gridElement.addEventListener("mousedown", colorGrid);
    canvas.appendChild(gridElement);
  }
}

function colorGrid(x) {
  if (x.type === "mouseover" && !mouseDown){
    return
  } x.target.style.backgroundColor = currentColor;
}

function setCurrentMode(newMode) {
  document.getElementById(currentMode).classList.remove('active');
  currentMode = newMode;
  document.getElementById(newMode).classList.add('active');
}

window.onload = () => {
  generateGrid();
  setCurrentMode(DEFMODE);
}