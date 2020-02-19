"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {}

//Creating global variables
var theInput = document.getElementById("main-color");
let rgbValueOfInput = hexToRgb(theInput.value);
let hslValueOfInput = rgbToHsl(rgbValueOfInput[0], rgbValueOfInput[1], rgbValueOfInput[2]);

//Get the value of the color from the input field
var hexCode = theInput.value;
theInput.addEventListener("input", function displayHex() {
  document.getElementById("hex-input").innerHTML = theInput.value;
});
theInput.addEventListener("input", function displayRgb() {
  rgbValueOfInput = hexToRgb(theInput.value);
  document.getElementById("rgb-input").innerHTML = "R: " + rgbValueOfInput[0] + ", G: " + rgbValueOfInput[1] + ", B: " + rgbValueOfInput[2];
});
theInput.addEventListener("input", function displayHsl() {
  hslValueOfInput = rgbToHsl(rgbValueOfInput[0], rgbValueOfInput[1], rgbValueOfInput[2]);
  document.getElementById("hsl-input").innerHTML = "H:" + hslValueOfInput[0] + ", S:" + hslValueOfInput[1] + ", V:" + hslValueOfInput[2];
});
//Converting HEX to RGB --> Parameter is a string, output is an array of three integers
function hexToRgb(hex) {
  let rHex = hex.substr(1, 2);
  let gHex = hex.substr(3, 2);
  let bHex = hex.substr(5, 2);
  let r = parseInt(rHex, 16);
  let g = parseInt(gHex, 16);
  let b = parseInt(bHex, 16);
  return [r, g, b];
}

//Converting RGB to HSL --> Parameters are integers, output is an array of three integers
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }
  if (h < 0) {
    h = h + 360;
  }
  l = (min + max) / 2;
  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  h = h / 360;
  return [h, s, l];
}

document.getElementById("hsl-input").innerHTML = theInput.value;
