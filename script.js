let color;
const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("random-generator");
const colorText = document.getElementById("color-text");

// generate 6-character hex values

button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += HEX[getRandomNumber()];
  }
  colorText.textContent = hexColor;
  colorText.style.color = hexColor;

  let background = document.getElementById("circle");
  background.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * HEX.length);
}
