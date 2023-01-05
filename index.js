/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-el");

// convert units when the convert button is clicked

convertBtn.addEventListener("click", function () {
  convertLength();
  convertVolume();
  convertMass();
});

// converts meters to feet and feet to meters

function convertLength() {
  conversion = 3.281;
  meter = (inputEl.value * conversion).toFixed(3);
  feet = (inputEl.value / conversion).toFixed(3);

  lengthEl.innerHTML = `${inputEl.value} meters = ${meter} feet | ${inputEl.value} feet = ${feet} meters`;
}

// converts liters to gallons and gallons to liters

function convertVolume() {
  conversion = 0.264;
  liter = (inputEl.value * conversion).toFixed(3);
  gallon = (inputEl.value / conversion).toFixed(3);

  volumeEl.innerHTML = `${inputEl.value} liters = ${liter} gallons | ${inputEl.value} gallons = ${gallon} liters`;
}

// converts kilograms to pounds and pounds to kilograms

function convertMass() {
  conversion = 2.204;
  kilogram = (inputEl.value * conversion).toFixed(3);
  pound = (inputEl.value / conversion).toFixed(3);

  massEl.innerHTML = `${inputEl.value} kilogram = ${kilogram} pound | ${inputEl.value} pound = ${pound} kilogram`;
}
