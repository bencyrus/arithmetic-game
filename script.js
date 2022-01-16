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

console.log(sumInputFields, comInputFields);

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

// Check for positive
function isPositive(number) {
  console.log(typeof number);
  return number > 0;
}

function submit(input) {
  console.log("successfull");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // It gets a lists of "list of inputs". each section that contains inputs must be given as a list of inputs
  checkRequired([sumInputFields, comInputFields]);

  // if (
  //   sumInputFields[0].value === "" ||
  //   sumInputFields[1].value === "" ||
  //   sumInputFields[2].value === "" ||
  //   sumInputFields[3].value === ""
  // ) {
  //   showError(sumInputFields[0], "input is required");
  // } else if (
  //   parseInt(sumInputFields[0].value) > parseInt(sumInputFields[1].value) ||
  //   parseInt(sumInputFields[2].value) > parseInt(sumInputFields[3].value)
  // ) {
  //   showError(
  //     sumInputFields[0],
  //     "Maximum of each number must be greater than it's minimum"
  //   );
  // } else if (
  //   !isPositive(sumInputFields[0].value) ||
  //   !isPositive(sumInputFields[1].value) ||
  //   !isPositive(sumInputFields[2].value) ||
  //   !isPositive(sumInputFields[3].value)
  // ) {
  //   showError(sumInputFields[0], "only integers larger than 0 are accepted");
  // } else {
  //   submit(sumInputFields[0]);
  // }

  // if (
  //   comInputFields[0].value === "" ||
  //   comInputFields[1].value === "" ||
  //   comInputFields[2].value === "" ||
  //   comInputFields[3].value === ""
  // ) {
  //   showError(comInputFields[0], "input is required");
  // } else if (
  //   parseInt(comInputFields[0].value) > parseInt(comInputFields[1].value) ||
  //   parseInt(comInputFields[2].value) > parseInt(comInputFields[3].value)
  // ) {
  //   showError(
  //     comInputFields[0],
  //     "Maximum of each number must be greater than it's minimum"
  //   );
  // } else if (
  //   !isPositive(comInputFields[0].value) ||
  //   !isPositive(comInputFields[1].value) ||
  //   !isPositive(comInputFields[2].value) ||
  //   !isPositive(comInputFields[3].value)
  // ) {
  //   showError(comInputFields[0], "only integers larger than 0 are accepted");
  // }
});
