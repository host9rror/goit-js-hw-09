const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = "";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", evt => {
    localStorage.setItem(localStorageKey, evt.target.value)
})

form.addEventListener("submit", evt => {
    evt.preventDefault();
      console.log(evt.target.elements.email.value)
      console.log(evt.target.elements.message.value);
      localStorage.removeItem(localStorageKey);
    form.reset();
})