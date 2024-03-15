const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

function populateFormFields() {
  const savedEmail = localStorage.getItem(localStorageKey + '-email');
  const savedMessage = localStorage.getItem(localStorageKey + '-message');

  if (savedEmail && savedMessage) {
    emailInput.value = savedEmail;
    textarea.value = savedMessage;
  }
};

document.addEventListener('DOMContentLoaded', populateFormFields);

form.addEventListener("input", evt => {
  localStorage.setItem(localStorageKey + '-email', emailInput.value);
  localStorage.setItem(localStorageKey + '-message', textarea.value);
});

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (emailInput.value.trim() && textarea.value.trim()) {
    console.log(emailInput.value);
    console.log(textarea.value);

    localStorage.removeItem(localStorageKey + '-email');
    localStorage.removeItem(localStorageKey + '-message');

    form.reset();
  } else {
    alert("Please fill in both fields before submitting the form.");
  }
})
