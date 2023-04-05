const container = document.querySelector(".main-container");
const createButton = document.getElementById("grid-maker");
const clearButton = document.getElementById("reset");
let currentSquares;


createButton.addEventListener("click", createSquares);
clearButton.addEventListener("click", squareGenerator);

function drawSketch () {
    this.style.backgroundColor = "black";
}

function createSquares (input) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    input = prompt("What grid size would you like? ");
    currentSquares = input;
    let inputTot = input**2;

    for (let i = 0; i < inputTot; i++) {
        let square = document.createElement("div");
        square.classList.add("grey");
        square.style.width = `calc(100%/${input})`;
        square.addEventListener("mouseover", drawSketch);
        container.appendChild(square);
    }
}

function squareGenerator () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
        
    let inputTot = currentSquares**2;

    for (let i = 0; i < inputTot; i++) {
        let square = document.createElement("div");
        square.classList.add("grey");
        square.style.width = `calc(100%/${currentSquares})`;
        square.addEventListener("mouseover", drawSketch);
        container.appendChild(square);
    }
}


