const LOGIN_FORM = document.querySelector(".login-form");
const INFO_FORM = document.querySelector(".info-form");
const EMAIL = document.getElementById("email");
const PASS = document.getElementById("pass");
const USERNAME = document.getElementById("username");
const GREAT_HOUSE = document.getElementById("great-house");
const REFERENCES = document.getElementById("preferences");
const LOGIN_BUTTON = document.getElementById("login-form-button");
const INFO_BUTTON = document.getElementById("info-form-button");

EMAIL.addEventListener('blur', () => changeFocusState("email"));
EMAIL.addEventListener('input', () => checkFocusState("email"));
PASS.addEventListener('blur', () => changeFocusState("pass"));
PASS.addEventListener('input', () => checkFocusState("pass"));
USERNAME.addEventListener('blur', () => changeFocusState("username"));
USERNAME.addEventListener('input', () => checkFocusState("username"));
GREAT_HOUSE.addEventListener('blur', () => changeFocusState("greatHouse"));
GREAT_HOUSE.addEventListener('input', () => checkFocusState("greatHouse"));
LOGIN_BUTTON.addEventListener("click", login);

const INPUT_LIST = [
    {
        name: "email",
        isFirstFocusOut: false,
        validateFunction: "checkEmail",
    },
    {
        name: "pass",
        isFirstFocusOut: false,
        validateFunction: "checkPass",
    },
    {
        name: "username",
        isFirstFocusOut: false,
        validateFunction: "checkUsername",
    },
    {
        name: "greatHouse",
        isFirstFocusOut: false,
        validateFunction: "checkGreatHouse",
    },
];

function changeFocusState(inputName) {
    for (let input of INPUT_LIST) {
        if (input.name === inputName) {
            input.isFirstFocusOut = true;
            [input.validateFunction]();
        }
    }
}

function checkFocusState(inputName) {
    for (let input of INPUT_LIST) {
        if (input.name === inputName && input.isFirstFocusOut) {
            [input.validateFunction]();
        }
    }
}

function checkEmail() {

}

function checkPass() {

}

function checkUsername() {

}

function checkGreatHouse() {

}

function login() {
    LOGIN_FORM.classList.add("hidden");
    INFO_FORM.classList.remove("hidden");
}
