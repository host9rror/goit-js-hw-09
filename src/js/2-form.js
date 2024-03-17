const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedFormData) {
    emailInput.value = savedFormData.email;
    textarea.value = savedFormData.message;
  }
});

form.addEventListener("input", evt => {
  if (evt.target === emailInput || evt.target === textarea) {
    const formData = {
      email: emailInput.value,
      message: textarea.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (emailInput.value.trim() && textarea.value.trim()) {
    console.log(emailInput.value);
    console.log(textarea.value);

    localStorage.removeItem(localStorageKey);

    form.reset();
  } else {
    alert("Please fill in both fields before submitting the form");
  }
});
