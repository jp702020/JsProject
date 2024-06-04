const number = Math.round(Math.random() * 100 + 1);
const form = document.querySelector("form");

console.log(number);

const prevguess = document.querySelector(".guesses");
let remaGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let count = 0;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("click");
  count++;
  if (count == 10) {
    startgame();
  }
  playGame();
});
const remaGuessArr = [];

function playGame() {
  while (count <= 10) {
    // console.log("click");
    let guessesedNumber = document.getElementById("guessField");
    guessesedNumber = guessesedNumber.value;
    if (!guessesedNumber || guessesedNumber > 100) {
      alert("Please provide a valid number");
    } else {
      if (guessesedNumber > number) {
        remaGuessArr.push(guessesedNumber);
        remaGuess.innerHTML = `${10 - count}`;
        console.log(remaGuessArr);
        prevguess.innerHTML = `${remaGuessArr}, `;
        lowOrHi.innerHTML = "your gussesed number is too high";
        guessesedNumber.innerText = "";
      } else if (guessesedNumber < number) {
        remaGuessArr.push(guessesedNumber);
        remaGuess.innerHTML = `${10 - count}`;
        console.log(remaGuessArr);
        prevguess.innerHTML = `${remaGuessArr}, `;
        lowOrHi.innerHTML = "your gussesed number is too low";
        guessesedNumber.innerText = "";
      } else {
        remaGuessArr.push(guessesedNumber);
        remaGuess.innerHTML = `${10 - count}`;
        console.log(remaGuessArr);
        prevguess.innerHTML = `${remaGuessArr}, `;
        lowOrHi.innerHTML = "your gussesed is rhight";
        guessesedNumber.innerText = "";
        startgame();
      }
    }
    break;
  }
}
function startgame() {
  let restart = confirm("are you want to play again");
  if (restart) {
    window.location.reload();
  }
}
