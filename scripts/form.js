const form = document.querySelector("#form-wrapper");
const contactName = document.getElementById('contact-name');
const emailAddress = document.getElementById('email-address');
const messageBody = document.getElementById('message-body');

const submitForm = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.validate');
  const invalidFields = Array.from(inputs).filter(input => input.value === "");
  console.log(inputs);
  if (invalidFields.length > 0) {
    invalidFields.forEach((field) => {
      field.classList.add('error')
    })
    return false;
  } else {
    form.submit();
  }
}
form.addEventListener("submit", submitForm);
