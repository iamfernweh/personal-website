const form = document.querySelector("#submit");
const submitButton = document.querySelector("#submitButton");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});