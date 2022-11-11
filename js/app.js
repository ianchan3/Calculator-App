const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");


for (let i = 0; i < keys.length; i++) {
  if (keys[i].innerHTML === "=") {
    keys[i].addEventListener("click", calculate);
  } else if (keys[i].innerHTML === "√") {
    keys[i].addEventListener("click", squareRoot);
  } else if (keys[i].innerHTML === "n²") {
    keys[i].addEventListener("click", squared);
  } else {
    keys[i].addEventListener("click", addToCurrentValue(i))
  }
}

function addToCurrentValue(i) {
  return () => {
    if (keys[i].innerHTML === "÷") {
      result.innerHTML += "/ ";
    } else if (keys[i].innerHTML === "x") {
      result.innerHTML += "*";   
    } else if (keys[i].innerHTML === "()") {
      bracket();   
    } else {
      result.innerHTML += keys[i].innerHTML;
    }
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
