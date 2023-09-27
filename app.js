const gameHint = document.getElementById("gameHint");
const numRange = document.getElementById("numRange");
const num = document.getElementById("num");
const answer = document.getElementById("answer");

let bingo = Math.floor(Math.random() * 100 + 1);
let min = 1;
let max = 100;

console.log(bingo);

answer.addEventListener("click", () => {
  // 將input輸出從string改為number
  let resNum = parseInt(num.value);
  //點擊按鈕後，清空input內容
  num.value = "";

  if (!resNum) {
    gameHint.innerHTML = " 請輸入一個數字!";
  } else if (resNum > bingo && resNum < max) {
    gameHint.innerHTML = " 再小一點!";
    max = resNum;
    num.max = max;
    numRange.innerHTML = min + "~" + max;
  } else if (resNum < bingo && resNum > min) {
    gameHint.innerHTML = " 再大一點!";
    min = resNum;
    num.min = min;
    numRange.innerHTML = min + "~" + max;
  } else if (resNum == bingo) {
    gameHint.innerHTML = " 答對了!";
    num.max = bingo;
    num.min = bingo;
    numRange.innerHTML = bingo;
    //答對之後按鈕失去功能
    answer.disabled = true;
  } else if (resNum == max || resNum == min) {
    gameHint.innerHTML = " 請不要輸入重複的數字!";
  } else if (resNum < min || resNum > max) {
    gameHint.innerHTML = "請輸入範圍內的數字!";
  }
});
