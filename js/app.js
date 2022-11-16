const keys = document.querySelectorAll("li");
const result = document.querySelector("p");
const clear = document.getElementById("clear");
const equals = document.querySelector(".equals");
const numbers = document.querySelector(".number");
const operators = document.querySelector(".operator");

for (let i = 0; i < keys.length; i++) {
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else if (keys[i].innerHTML === "√") {
    keys[i].addEventListener("click", squareRoot);
  } else if (keys[i].innerHTML === "n²") {
    keys[i].addEventListener("click", squared);
  } else if (keys[i].innerHTML === "( )") {
    keys[i].addEventListener("click", bracket);
  } else if (keys[i].innerHTML === "π") {
    keys[i].addEventListener("click", pi);
  } else {
    keys[i].addEventListener("click", () => {
      if (keys[i].innerHTML === "÷") {
        result.innerHTML += "/ ";
      } else if (keys[i].innerHTML === "x") {
        result.innerHTML += "*";   
      } else if (keys[i].innerHTML === "%") {
        calculate()
        result.innerHTML = (result.innerHTML /100);   
      } else if (keys[i].innerHTML === "+/-") {
        if (result.innerHTML.length >= 0) {
          result.innerHTML += "-";   
        }
      } else {
        result.innerHTML += keys[i].innerHTML;
      }
    })
  }
}

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