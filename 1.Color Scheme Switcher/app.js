const background = document.querySelector(".main-container");
const colorBtns = document.querySelectorAll(".color-btn");

colorBtns.forEach(function (colorBtn) {
  colorBtn.addEventListener("click", (event) => {
    background.style.backgroundColor = event.target.id;
  });
});
