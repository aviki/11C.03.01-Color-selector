"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {}

//Get the value of the color from the input field
var theInput = document.getElementById("main-color");
var hexCode = theInput.value;
theInput.addEventListener("input", function displayHEX() {
  document.getElementById("hex-input").innerHTML = theInput.value;
});
