const LOGIN_FORM = document.querySelector(".login-form");
const INFO_FORM = document.querySelector(".info-form");
const EMAIL = document.getElementById("email");
const PASS = document.getElementById("pass");
const USERNAME = document.getElementById("username");
const GREAT_HOUSE = document.getElementById("great-house");
const REFERENCES = document.getElementById("preferences");
const LOGIN_BUTTON = document.getElementById("login-form-button");
const INFO_BUTTON = document.getElementById("info-form-button");

LOGIN_BUTTON.addEventListener("click", login);

function login() {
    LOGIN_FORM.classList.add("hidden");
    INFO_FORM.classList.remove("hidden");
}
