let sliderListener = document.getElementById("size-slider").addEventListener("input", sizeChange);

function sizeChange() {
  let size = document.getElementById("size-slider").value;

  document.getElementById("size-value").textContent = size + " x " + size;
}