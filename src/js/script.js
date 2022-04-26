const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let isShowingResults = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addToDisplay(button.innerText);
  });
});

function addToDisplay(value) {
  newCalculation();
  if (value === "AC") {
    display.innerText = "";
    isShowingResults = false;
  } else if (value === "C") {
    display.innerText = display.innerText.slice(0, -1);
    isShowingResults = false;
  } else if (value === "=") {
    display.innerText = eval(display.innerText);
    isShowingResults = true;
  } else {
    display.innerText += value;
    isShowingResults = false;
  }
}
function newCalculation() {
  if (isShowingResults === true) {
    display.innerText = "";
  }
}
