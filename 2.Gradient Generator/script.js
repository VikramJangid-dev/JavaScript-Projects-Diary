let gradientProperty = document.querySelector(".gradient-property");
let gradientDiplay = document.querySelector(".gradient-display");
let colorDiv1 = document.getElementById("color1");
let colorDiv2 = document.getElementById("color2");

document.getElementById("genbtn").addEventListener("click", gradientGenrator);

function randomColorGenrate() {
  const hexValues = "0123456789abcdef";
  let hexcode = "#";
  for (let i = 0; i < 6; i++) {
    hexcode = hexcode + hexValues[Math.floor(Math.random() * 16)];
  }
  return hexcode;
}

function gradientGenrator() {
  let color1 = randomColorGenrate();
  let color2 = randomColorGenrate();
  let gradient = `linear-gradient(to right, ${color1}, ${color2})`;
  applyGradient(gradient, color1, color2);
}

function applyGradient(gradient, color1, color2) {
  document.querySelector(".gradient-display").style.background = gradient;
  colorDiv1.style.backgroundColor = color1;
  colorDiv2.style.backgroundColor = color2;
  colorDiv1.innerText = `${color1}`;
  colorDiv2.innerText = `${color2}`;
  gradientProperty.innerText = gradient;
  gradientProperty.style.borderLeft = `2px solid ${color1}`;
  gradientProperty.style.borderRight = `2px solid ${color2}`;
}

gradientProperty.addEventListener("click", () => {
  navigator.clipboard.writeText(gradientProperty.innerHTML);
  alert("Gradient Copied!");
});
