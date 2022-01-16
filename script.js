const form = document.getElementById("form");
const sum_1_min = document.getElementById("sum-1-min");
const sum_1_max = document.getElementById("sum-1-max");
const sum_2_min = document.getElementById("sum-2-min");
const sum_2_max = document.getElementById("sum-2-max");
const com_1_min = document.getElementById("com-1-min");
const com_1_max = document.getElementById("com-1-max");
const com_2_min = document.getElementById("com-2-min");
const com_2_max = document.getElementById("com-2-max");
const sum_section = document.getElementById("sum-section");
const com_section = document.getElementById("com-section");

const sumInputFields = sum_section
  .querySelector(".form-control")
  .querySelectorAll("input");
const comInputFields = com_section
  .querySelector(".form-control")
  .querySelectorAll("input");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage =
    formControl.parentElement.querySelector("#error-message");
  formControl.className = "form-control error";
  input.className = "error";
  errorMessage.className = "error";
  errorMessage.innerText = message;
}

// Check Required for input fields in each section
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    input.forEach((field) => {
      if (field.value === "") {
        showError(field, "Input is required");
      }
    });
  });
}

// Check Number Range for input fields in each section
// The min and max values are optional but pre-defined at 1, 99999
function checkNumberRange(inputArray, min = 1, max = 99999) {
  inputArray.forEach((input) => {
    input.forEach((number) => {
      if (number.value < min || number.value > max) {
        showError(
          number,
          `Only numbers between ${min} and ${max} are accepted`
        );
      }
    });
  });
}

// Checks for Max value being greater than Min value
function checkMaxGTMin(inputArray) {
  inputArray.forEach((input) => {
    if (parseInt(input[0].value) >= parseInt(input[1].value)) {
      showError(
        input[1],
        "Maximum of each number must be greater than it's minimum"
      );
    }
    if (parseInt(input[2].value) >= parseInt(input[3].value)) {
      showError(
        input[3],
        "Maximum of each number must be greater than it's minimum"
      );
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // It gets a list of "list of inputs", optional min and  max values (if not specified, min is 1 and max is 99999).
  // each section that requires its inputs to be within a specific number range must be given as a part of an input list.
  // The list must be followed by the min and max values
  checkNumberRange([sumInputFields, comInputFields], 1, 99999);

  // It gets a list of "list of inputs".
  // each section that requires to be filled must be given as an element of the list
  checkRequired([sumInputFields, comInputFields]);

  // It gets a list of "list of inputs", then checks for each number pair (each number range) to make sure the second number
  // in pair is greater than the first one
  checkMaxGTMin([sumInputFields, comInputFields]);
});
