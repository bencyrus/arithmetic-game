const form = document.getElementById("form");
const sumInputFields = document
  .getElementById("sum-section")
  .querySelector(".form-control")
  .querySelectorAll("input");
const comInputFields = document
  .getElementById("com-section")
  .querySelector(".form-control")
  .querySelectorAll("input");

// Show input error message
// Makes error messages visible and highlights around the wrong field.
// Takes in an error message to replace the default in HTML
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
    input.forEach((number) => {
      if (number.value === "") {
        showError(number, "Input is required");
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
  // e.preventDefault();
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

// ============ A MORE OPTIMAL BUT LESS SCALABLE SOLUTION =============
// The solutions has mistakes in the order of error raising, but instead of looping the input fields 3 times, it happens only once
//
// function inputFieldErrorCheck(inputArray, min = 1, max = 99999) {
//   inputArray.forEach((input) => {
//     input.forEach((number) => {
//       // Check Number Range for input fields in each section
//       // The min and max values are optional but pre-defined at 1, 99999
//       if (number.value < min || number.value > max) {
//         showError(
//           number,
//           `Only numbers between ${min} and ${max} are accepted`
//         );
//       }
//       // Check Required for input fields in each section
//       if (number.value === "") {
//         showError(number, "Input is required");
//       }
//     });
//     // Checks for Max value being greater than Min value for inputs with 2 pair of numbers
//     if (parseInt(input[0].value) >= parseInt(input[1].value)) {
//       showError(
//         input[1],
//         "Maximum of each number must be greater than it's minimum"
//       );
//     }
//     if (parseInt(input[2].value) >= parseInt(input[3].value)) {
//       showError(
//         input[3],
//         "Maximum of each number must be greater than it's minimum"
//       );
//     }
//   });
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   inputFieldErrorCheck([sumInputFields, comInputFields], 1, 99999);
// });
