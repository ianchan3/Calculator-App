const result = document.querySelector("p");
const clear = document.getElementById("clear");
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
    } else {
      result.innerHTML += e.target.innerHTML;
    };
  });
});


function calculate() {
  return (result.innerHTML = eval(result.innerHTML));
}

clear.addEventListener("click", () => {
  result.innerHTML = ""
})


function squareRoot() {
  calculate();
  return (result.innerHTML = Math.sqrt(result.innerHTML));
}

function percentage() {
  calculate();
  result.innerHTML = (result.innerHTML /100);   
}

function squared() {
  calculate();
  return (result.innerHTML = Math.pow(result.innerHTML, 2));
}

function pi() {
  calculate();
  return (result.innerHTML = Math.PI * result.innerHTML);
}

let i = 0;
function bracket() {
  if (i == 0) {
    result.innerHTML += "(";
    i = 1;
  } else {
    result.innerHTML += ")";
    i = 0;
  }
}

window.addEventListener("keydown", (e) => {
  const keyPressed = e.key;
  const testRegex = /[0-9.%π()+-/*=]/g
  const matched = keyPressed.match(testRegex);

if (e.key == "Enter") {
  calculate();
} else if (matched) {
  result.innerHTML += e.key;
}
});

