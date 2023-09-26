const gameHint = document.getElementById("gameHint");
const numRange = document.getElementById("numRange");
const num = document.getElementById("num");
const answer = document.getElementById("answer");

let bingo = Math.floor(Math.random() * 100 + 1);
let min = 1;
let max = 100;

console.log(bingo);

answer.addEventListener("click", () => {
  if (num.value == bingo) {
    gameHint.innerHTML = " 答對了!";
    numRange.innerHTML = bingo;
  } else if (num.value > bingo) {
    gameHint.innerHTML = " 再小一點!";
    max = num.value;
    num.max = max;
    numRange.innerHTML = min + "~" + max;
  } else if (num.value < bingo) {
    gameHint.innerHTML = " 再大一點!";
    min = num.value;
    num.min = min;
    numRange.innerHTML = min + "~" + max;
  }
});
