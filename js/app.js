// const keys = document.querySelectorAll("li");
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
    } else if (e.target.innerHTML === "+/-") {
      plusMinus();
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

function plusMinus() {
  if (result.innerHTML.length >= 0) {
    result.innerHTML += "-";  
  } 
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
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' ||
    e.key === '%' ||
    e.key === 'π' ||
    e.key === '(' ||
    e.key === ')' 
  ) {
    result.innerHTML += e.key;
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    result.innerHTML += e.key;
  } else if (e.key === "*") {
    result.innerHTML += e.key;
  } else if (e.key === "±") {
    clickOperation("+/-");
  } else if (e.key == "Enter" || e.key === "=") {
    calculate();
  }
});

function clickOperation(key) {
  keys.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}