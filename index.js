const container = document.querySelector(".main-container");
const button = document.getElementById("grid-maker");

button.addEventListener("click", createSquares);

function drawSketch () {
    this.style.backgroundColor = "black";
}

function createSquares (input) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    input = prompt("What grid size would you like? ");
    let inputTot = input**2;

    for (let i = 0; i < inputTot; i++) {
        let square = document.createElement("div");
        square.classList.add("grey");
        square.style.width = `calc(100%/${input})`;
        square.addEventListener("mouseover", drawSketch);
        container.appendChild(square);
    }
}

