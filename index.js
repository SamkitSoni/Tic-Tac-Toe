let text = document.querySelectorAll(".box");
let turn = "X";

text.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            turn = turn === "X" ? "O" : "X";
        }
    });
});

function checkWin(){
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (text[a].innerHTML && text[a].innerHTML === text[b].innerHTML && text[a].innerHTML === text[c].innerHTML) {
            alert(`${text[a].innerHTML} wins!`);
            resetGame();
            return;
        }
    }
}

function checkDraw() {
    if (Array.from(text).every(box => box.innerHTML !== "")) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    turn = "X";
    text.forEach(e => {
        e.innerHTML = " ";
    });
}
