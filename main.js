//first row
let clear = document.getElementById("clear");

clear.addEventListener("click", clearClick);

function clearClick(){
    location.reload()
}

let calcScreen = document.getElementById("calcScreen");


//second row
let num7 = document.getElementById("num7");
num7.addEventListener("click", num7Click);

function num7Click() {
  let seven = document.createTextNode("7");
  calcScreen.appendChild(seven);
}

let num8 = document.getElementById("num8");
num8.addEventListener("click", num8Click);

function num8Click() {
  let eight = document.createTextNode("8");
  calcScreen.appendChild(eight);
}

let num9 = document.getElementById("num9");
num9.addEventListener("click", num9Click);

function num9Click() {
  let nine = document.createTextNode("9");
  calcScreen.appendChild(nine);
}

let divide = document.getElementById("divide")
divide.addEventListener("click", divideClick);

function divideClick() {
    let divideBy = document.createTextNode("/")
    calcScreen.appendChild(divideBy)
}


//third row
let num4 = document.getElementById("num4");
num4.addEventListener("click", num4Click);

function num4Click() {
  let four = document.createTextNode("4");
  calcScreen.appendChild(four);
}

let num5 = document.getElementById("num5");
num5.addEventListener("click", num5Click);

function num5Click() {
  let five = document.createTextNode("5");
  calcScreen.appendChild(five);
}

let num6 = document.getElementById("num6");
num6.addEventListener("click", num6Click);

function num6Click() {
  let six = document.createTextNode("6");
  calcScreen.appendChild(six);
}

let multiply = document.getElementById("multiply")
multiply.addEventListener("click", multiplyClick);

function multiplyClick() {
    let multiplyBy = document.createTextNode("*")
    calcScreen.appendChild(multiplyBy)
}


//fourth row
let num1 = document.getElementById("num1");
num1.addEventListener("click", num1Click);

function num1Click() {
  let one = document.createTextNode("1");
  calcScreen.appendChild(one);
}

let num2 = document.getElementById("num2");
num2.addEventListener("click", num2Click);

function num2Click() {
  let two = document.createTextNode("2");
  calcScreen.appendChild(two);
}

let num3 = document.getElementById("num3");
num3.addEventListener("click", num3Click);

function num3Click() {
  let three = document.createTextNode("3");
  calcScreen.appendChild(three);
}

let subtract = document.getElementById("subtract")
subtract.addEventListener("click", subtractClick);

function subtractClick() {
    let subtractFrom = document.createTextNode("-")
    calcScreen.appendChild(subtractFrom)
}


//fifth row
let num0 = document.getElementById("num0")
num0.addEventListener("click", num0Click);

function num0Click() {
    let zero = document.createTextNode("0")
    calcScreen.appendChild(zero)
}

let decimal = document.getElementById("decimal")
decimal.addEventListener("click", decimalClick);

function decimalClick() {
    let decimalPoint = document.createTextNode(".")
    calcScreen.appendChild(decimalPoint)
}

let equal = document.getElementById("equal")
equal.addEventListener("click", equalClick);

function equalClick() {
    
}

let plus = document.getElementById("plus")
plus.addEventListener("click", plusClick);

function plusClick() {
    let addTo = document.createTextNode("+")
    calcScreen.appendChild(addTo)
}