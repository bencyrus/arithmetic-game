const form = document.getElementById("form");
const sum_1_min = document.getElementById("sum-1-min");
const sum_1_max = document.getElementById("sum-1-max");
const sum_2_min = document.getElementById("sum-2-min");
const sum_2_max = document.getElementById("sum-2-max");
const com_1_min = document.getElementById("com-1-min");
const com_1_max = document.getElementById("com-1-max");
const com_2_min = document.getElementById("com-2-min");
const com_2_max = document.getElementById("com-2-max");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (sum_1_min.value === "") {
    showError(sum_1_min, "input is required");
  } else {
    showSuccess(sum_1_min);
  }
});
