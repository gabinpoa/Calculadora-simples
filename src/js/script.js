const calculatorContainer = document.createElement("div");
const displayContainer = document.createElement("div");

calculatorContainer.classList = "calculator";
displayContainer.classList = "display";

calculatorContainer.append(displayContainer);
document.body.append(calculatorContainer);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["*", "/", "+", "-", "."];
const specialValues = ["C", "AC", "="];
const values = [operators, numbers, specialValues];

values.forEach((valueArray) => {
  valueArray.forEach((value) => {
    let button = document.createElement("button");
    if ((value === "=") | (value === "AC")) {
      button.classList = "span2";
    }
    button.type = "button";
    button.innerText = value;
    calculatorContainer.append(button);
    button.addEventListener("click", () => {
      addToDisplay(value);
    });
  });
});

function addToDisplay(value) {
  if (value === "AC") {
    displayContainer.innerText = "";
  } else if (value === "C") {
    displayContainer.innerText = displayContainer.innerText.slice(0, -1);
  } else if (value === "=") {
    displayContainer.innerText = eval(displayContainer.innerText);
  } else {
    displayContainer.innerText += value;
  }
}
