import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),a=t.elements.email,o=t.elements.message,l="feedback-form-state";document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem(l));e&&(a.value=e.email,o.value=e.message)});t.addEventListener("input",e=>{if(e.target===a||e.target===o){const s={email:a.value,message:o.value};localStorage.setItem(l,JSON.stringify(s))}});t.addEventListener("submit",e=>{e.preventDefault(),a.value.trim()&&o.value.trim()?(console.log(a.value),console.log(o.value),localStorage.removeItem(l),t.reset()):alert("Please fill in both fields before submitting the form.")});
//# sourceMappingURL=commonHelpers2.js.map
