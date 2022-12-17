const result = document.querySelector("p");
const equals = document.querySelector(".equals");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");


numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    result.innerHTML += e.target.innerText;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!result) return; 
    else if (e.target.innerHTML === "=") {
      calculate();
    } else if (e.target.innerHTML === "√") {
      squareRoot();
    } else if (e.target.innerHTML === "n²") {
      squared();
    } else if (e.target.innerHTML === "π") {
      pi();
    } else if (e.target.innerHTML === "%") {
      percentage();
    } else if (e.target.innerHTML === "C") {
      clearAll();
    } else if (e.target.innerHTML === "delete") {
      deleteOne();
    } else {
      result.innerHTML += e.target.innerHTML;
    };
  });
});

function calculate() {
  try {
    (result.innerHTML = eval(result.innerHTML));
  } catch (error) {
    result.innerHTML = "NaN";
  }
}

function clearAll() {
  result.innerHTML = "";
}

function squareRoot() {
  calculate();
  result.innerHTML = Math.sqrt(result.innerHTML);
}

function percentage() {
  calculate();
  result.innerHTML = (result.innerHTML /100);   
}

function squared() {
  calculate();
  result.innerHTML = Math.pow(result.innerHTML, 2);
}

function pi() {
  if (result.innerHTML.length > 0) {
    calculate();
    result.innerHTML = Math.PI * result.innerHTML;
  } else {
    result.innerHTML = 3.14;
  }
}

function deleteOne() {
  const deleteResult = result.innerHTML.slice(0, result.innerHTML.length -1)
  result.innerHTML = deleteResult;
}

window.addEventListener("keydown", (e) => {
  const keyPressed = e.key;
  const testRegex = /[0-9.%π()+-/*]/g
  const matched = keyPressed.match(testRegex);

if (e.key == "Enter") {
  calculate();
} else if (e.keyCode === 8) {
  deleteOne();
} else if (e.key === "C" || e.key === "c") {
  clearAll();
} else if (matched) {
  result.innerHTML += e.key;
}
});

