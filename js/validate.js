/* Selectors */
const loginForm = document.querySelector(".login-form");
const infoForm = document.querySelector(".info-form");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const username = document.getElementById("username");
const greatHouse = document.getElementById("great-house");
const preferences = document.getElementById("preferences");
const loginButton = document.getElementById("login-form-button");
const infoButton = document.getElementById("info-form-button");

/* Event listeners */
email.addEventListener("blur", () => changeFocusState("email"));
email.addEventListener("input", () => checkFocusState("email"));
pass.addEventListener("blur", () => changeFocusState("pass"));
pass.addEventListener("input", () => checkFocusState("pass"));
username.addEventListener("blur", () => changeFocusState("username"));
username.addEventListener("input", () => checkFocusState("username"));
greatHouse.addEventListener("blur", () => changeFocusState("greatHouse"));
greatHouse.addEventListener("input", () => checkFocusState("greatHouse"));
preferences.addEventListener("blur", () => changeFocusState("preferences"));
preferences.addEventListener("input", () => checkFocusState("preferences"));
loginButton.addEventListener("click", login);
infoButton.addEventListener("click", saveInfo);

const GREAT_HOUSES_LIST = [
    "Targaryen",
    "Stark",
    "Lannister",
    "Arryn",
    "Tully",
    "Greyjoy",
    "Baratheon",
    "Tyrell",
    "Martell",
];

/* Pattern of search */
const EMAIL_PATTERN = /^([A-Za-z0-9][-+A-Za-z0-9.]*[A-Za-z0-9])@([A-Za-z0-9][-A-Za-z0-9.]{0,61}[A-Za-z0-9])\.[A-Za-z]{2,4}$/;
const PASS_PATTERN = /.{8,}/;
const USERNAME_PATTERN = /[-_A-Za-z0-9]{3,}/;
const PREFERENCES_PATTERN = /.+/;

/* List of all inputs and they properties */
const inputList = [
    {
        name: "email",
        isFirstFocusOutDone: false,
        validateFunction: checkText,
        element: email,
        pattern: EMAIL_PATTERN,
    },
    {
        name: "pass",
        isFirstFocusOutDone: false,
        validateFunction: checkText,
        element: pass,
        pattern: PASS_PATTERN,
    },
    {
        name: "username",
        isFirstFocusOutDone: false,
        validateFunction: checkText,
        element: username,
        pattern: USERNAME_PATTERN,
    },
    {
        name: "greatHouse",
        isFirstFocusOutDone: false,
        validateFunction: checkSelect,
        element: greatHouse,
        pattern: GREAT_HOUSES_LIST,
    },
    {
        name: "preferences",
        isFirstFocusOutDone: false,
        validateFunction: checkText,
        element: preferences,
        pattern: PREFERENCES_PATTERN,
    },
];

/**
 * Change focusOut state of some input and call a validate function
 *
 * @param inputName Name of input
 */
function changeFocusState(inputName) {
    for (let input of inputList) {
        if (input.name === inputName) {
            input.isFirstFocusOutDone = true;
            input.validateFunction(input.element, input.pattern);
        }
    }
}

/**
 * Check focusOut state of some input and call a validate function
 * if focusOut is true, otherwise - nothing to do
 *
 * @param inputName Name of input
 */
function checkFocusState(inputName) {
    for (let input of inputList) {
        if (input.name === inputName && input.isFirstFocusOutDone) {
            input.validateFunction(input.element, input.pattern);
        }
    }
}

/**
 * Checks if some text input matches the specified pattern
 *
 * @param element Input element
 * @param pattern The pattern for which the verification is carried out
 * @returns {boolean} True if element value match the pattern
 */
function checkText(element, pattern) {
    if (element.value.match(pattern)) {
        element.classList.remove("input-error");
        return true;
    } else {
        element.classList.add("input-error");
        return false;
    }
}

/**
 * Checks if some select input matches the specified options list
 *
 * @param element Select element
 * @param optionsList List of allowed options of select
 * @returns {boolean} True if select value match one of options list
 */
function checkSelect(element, optionsList) {
    if (optionsList.includes(element.value)) {
        element.classList.remove("input-error");
        return true;
    } else {
        element.classList.add("input-error");
        return false;
    }
}

/**
 * Check login fields
 * hide login form and show info form if fields are valid
 */
function login() {
    if (checkText(email, EMAIL_PATTERN) && checkText(pass, PASS_PATTERN)) {
        loginForm.classList.add("hidden");
        infoForm.classList.remove("hidden");
    }
}

/**
 * Check info fields
 */
function saveInfo() {
    checkText(username, USERNAME_PATTERN);
    checkSelect(greatHouse, GREAT_HOUSES_LIST);
    checkText(preferences, PREFERENCES_PATTERN);
}
