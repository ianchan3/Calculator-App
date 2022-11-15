const keys = document.querySelectorAll("li");
const result = document.querySelector("p");
const clear = document.getElementById("clear");
const equals = document.querySelector(".equals");


for (let i = 0; i < keys.length; i++) {
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else if (keys[i].innerHTML === "√") {
    keys[i].addEventListener("click", squareRoot);
  } else if (keys[i].innerHTML === "n²") {
    keys[i].addEventListener("click", squared);
  } else if (keys[i].innerHTML === "()") {
    keys[i].addEventListener("click", bracket);
  } else {
    keys[i].addEventListener("click", () => {
      if (keys[i].innerHTML === "÷") {
        result.innerHTML += "/ ";
      } else if (keys[i].innerHTML === "x") {
        result.innerHTML += "*";   
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
  return (result.innerHTML = Math.sqrt(result.innerHTML));
}

function squared() {
  return (result.innerHTML = Math.pow(result.innerHTML, 2));
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
    e.key === '%' 
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
 
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
});

function clickButtonEl(key){
  keys.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  keys.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}

function clickEqual() {
    equals.click();
  };





