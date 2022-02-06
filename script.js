const btnAdd = document.querySelector(".btn-add");
const textArea = document.querySelector(".text-area");
const close = document.querySelector(".icon");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const allStiky = document.querySelector(".all-stiky");
const sticky = document.querySelector(".stikcy");
btnAdd.addEventListener("click", () => {
  modal.style.display = "block";
  container.classList.add("color");
});
close.addEventListener("click", () => {
  modal.style.display = "none";
  container.classList.remove("color");
});

let ran = 0;
let color;
let maxVal = 0xffffff;
const stikcyFunction = function () {
  textArea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ran = Math.floor(Math.random() * (7 - -7 + 1) + -7);
      color = Math.floor(Math.random() * maxVal)
        .toString(16)
        .padStart(6, 0);
      const markup = `
          <div style="background-color:#${color}; transform: rotate(${ran}deg)" class="stiky">${textArea.value}</div>
            `;
      allStiky.insertAdjacentHTML("afterbegin", markup);
    }
  });
};
stikcyFunction();
