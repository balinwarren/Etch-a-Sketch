let sliderListener = document.getElementById("size-slider").addEventListener("input", sizeChange);
let colorListener = document.getElementById("color-picker").addEventListener("change", colorChange);

let currentColor = "";

function sizeChange() {
  let size = document.getElementById("size-slider").value;

  document.getElementById("size-value").textContent = size + " x " + size;
}

function colorChange() {
  let currentColor = document.getElementById("color-picker").value;

  console.log(currentColor);
}