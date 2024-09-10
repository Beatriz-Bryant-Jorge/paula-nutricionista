const form = document.querySelector("#form-wrapper");

const submitForm = (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.validate');
  const invalidFields = Array.from(inputs).filter(input => input.value === "");
  if (invalidFields.length > 0) {
    invalidFields.forEach((field) => {
      field.classList.add('error-message-container');
      setTimeout(() => {
        field.classList.remove('error-message-container');
      }, 1000)
    })
    return false;
  } else {
    form.submit();
  }
}
form.addEventListener("submit", submitForm);
