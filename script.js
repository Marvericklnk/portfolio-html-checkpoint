let form = document.querySelector("#contact-form");
let status = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  status.textContent = "Demo complete! Your entries are valid. No message has been sent.";
});
