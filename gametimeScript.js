let questions = gameSet.questions;
let time = gameSet.duration;
let tempQuestions = questions;
let question = gameSet.questions[1];
let answer = document.querySelector(".answer");
let score = 0;

let secondsLeft = document.querySelector(".seconds-left");
let currentScore = document.querySelector(".score-number");

// document.addEventListener("DOMContentLoaded", function (e) {
// Start Countdown
// Show First Question
// });

function compareAnswer(input, question) {
  return input === question[3];
}

secondsLeft.innerHTML = time;

setInterval(function () {
  time--;
  if (time >= 0) {
    secondsLeft.innerHTML = time;
  }
  if (time === 0) {
    console.log("Finished");
  }
}, 1000);

answer.addEventListener("input", function (e) {
  if (compareAnswer(parseInt(answer.value), question) === true) {
    score += 1;
    currentScore.innerHTML = score;
  }
});

// tempQuestions.forEach((element) => {
//   console.log(element[0], element[1], element[2], element[3]);
//   answer.addEventListener("input", function (e) {
//     if (compareAnswer(parseInt(answer.value), question) === true) {
//       score += 1;
//     }
//   });
//   console.log(score);
// });

// answer.addEventListener("input", function (e) {
//     console.log(compareAnswer(parseInt(answer.value), question));
// });
