let questions = gameSet.questions;
let time = gameSet.duration;
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
    document
      .querySelector(".question")
      .querySelector(".final-score").innerHTML = score;

    document.querySelector(".question").querySelector(".prompt").className =
      "prompt ft-30";
    document.querySelector(".question").querySelector(".prompt").innerHTML =
      "Your Score:";
    document.querySelector(".question").querySelector(".equal-sign").className =
      "equal-sign d-none";
    document.querySelector(".question").querySelector("input").className =
      "answer d-none";
    document
      .querySelector(".question")
      .querySelector(".final-score").className = "final-score d-block";
    document
      .querySelector(".end-game")
      .querySelectorAll("div")
      .forEach((element) => {
        element.className = "d-block";
      });
  }
}, 1000);

answer.addEventListener("input", function (e) {
  if (compareAnswer(parseInt(answer.value), currentQuestion) === true) {
    score += 1;
    currentScore.innerHTML = score;
    pickQuestion(questions);
    answer.value = "";
  }
});
