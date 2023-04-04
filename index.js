const container = document.querySelector(".main-container");

function createSquares (input) {

    for (let i = 0; i < input; i++) {
        let square = document.createElement("div");
        square.classList.add("grey")
        container.appendChild(square);
    }
}
createSquares(prompt("ENTER: "));