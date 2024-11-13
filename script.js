const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.querySelector(".login-button");

function validateForm() {
  loginButton.disabled = !(email.value && password.value);
}

email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);