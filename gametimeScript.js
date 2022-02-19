console.log(gameSet.questions[1][3]);

let answer = document.querySelector(".answer");

// document.addEventListener("DOMContentLoaded", function (e) {
// Start Countdown
// Show First Question
// });

function compareAnswer(input, question) {
  if (input.value == question[3]) {
    return 1;
  } else {
    return 0;
  }
}

answer.addEventListener("input", function (e) {
  console.log(answer.value);
});
