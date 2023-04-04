const container = document.querySelector(".main-container");

function createSquares (input) {
    let inputTot = input**2
    for (let i = 0; i < inputTot; i++) {
        let square = document.createElement("div");
        square.classList.add("grey")
        square.style.width = `calc(100%/${input})`;
        container.appendChild(square);
    }
}
createSquares(prompt("ENTER: "));