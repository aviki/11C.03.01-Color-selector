"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {}

//Get the value of the color from the input field
var theInput = document.getElementById("main-color");
var hexCode = theInput.value;
theInput.addEventListener("input", function displayHEX() {
  document.getElementById("hex-input").innerHTML = theInput.value;
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

//Converting RGB to HSL
