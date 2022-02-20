let questions = gameSet.questions;
let time = gameSet.duration;
let tempQuestions = questions;
let prompt = document.querySelector(".prompt");
let answer = document.querySelector(".answer");
let score = 0;

let secondsLeft = document.querySelector(".seconds-left");
let currentScore = document.querySelector(".score-number");

let currentQuestion = questions.pop();

// document.addEventListener("DOMContentLoaded", function (e) {
// Start Countdown
// Show First Question
// });

function pickQuestion(questionList) {
  currentQuestion = questions.pop();
  prompt.innerHTML = `${currentQuestion[0]} ${currentQuestion[2]} ${currentQuestion[1]}`;
}

function compareAnswer(input, question) {
  return input === question[3];
}

prompt.innerHTML = `${currentQuestion[0]} ${currentQuestion[2]} ${currentQuestion[1]}`;

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
  if (compareAnswer(parseInt(answer.value), currentQuestion) === true) {
    score += 1;
    currentScore.innerHTML = score;
    pickQuestion(questions);
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
