const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let showingResults = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addToDisplay(button.innerText);
  });
});

function addToDisplay(value) {
  showingResults = false;
  if (value === "AC") {
    display.innerText = "";
    showingResults = false;
  } else if (value === "C") {
    display.innerText = display.innerText.slice(0, -1);
    showingResults = false;
  } else if (value === "=") {
    display.innerText = eval(display.innerText);
    showingResults = true;
  } else {
    display.innerText += value;
  }
}
