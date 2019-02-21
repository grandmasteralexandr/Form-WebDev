/* Selectors */
const LOGIN_FORM = document.querySelector(".login-form");
const INFO_FORM = document.querySelector(".info-form");
const EMAIL = document.getElementById("email");
const PASS = document.getElementById("pass");
const USERNAME = document.getElementById("username");
const GREAT_HOUSE = document.getElementById("great-house");
const PREFERENCES = document.getElementById("preferences");
const LOGIN_BUTTON = document.getElementById("login-form-button");
const INFO_BUTTON = document.getElementById("info-form-button");

/* Event listeners */
EMAIL.addEventListener("blur", () => changeFocusState("email"));
EMAIL.addEventListener("input", () => checkFocusState("email"));
PASS.addEventListener("blur", () => changeFocusState("pass"));
PASS.addEventListener("input", () => checkFocusState("pass"));
USERNAME.addEventListener("blur", () => changeFocusState("username"));
USERNAME.addEventListener("input", () => checkFocusState("username"));
GREAT_HOUSE.addEventListener("blur", () => changeFocusState("greatHouse"));
GREAT_HOUSE.addEventListener("input", () => checkFocusState("greatHouse"));
PREFERENCES.addEventListener("blur", () => changeFocusState("preferences"));
PREFERENCES.addEventListener("input", () => checkFocusState("preferences"));
LOGIN_BUTTON.addEventListener("click", login);
INFO_BUTTON.addEventListener("click", saveInfo);

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
const EMAIL_PATTERN = /^([A-Za-z0-9][-+A-Za-z0-9.]*[A-Za-z0-9])@([A-Za-z0-9][-A-Za-z0-9.]*[A-Za-z0-9])\.[A-Za-z]{2,4}$/;
const PASS_PATTERN = /.{8,}/;
const USERNAME_PATTERN = /[-_A-Za-z0-9]{3,}/;
const PREFERENCES_PATTERN = /.+/;

/* List of all inputs and they properties */
const INPUT_LIST = [
    {
        name: "email",
        isFirstFocusOut: false,
        validateFunction: checkText,
        element: EMAIL,
        pattern: EMAIL_PATTERN,
    },
    {
        name: "pass",
        isFirstFocusOut: false,
        validateFunction: checkText,
        element: PASS,
        pattern: PASS_PATTERN,
    },
    {
        name: "username",
        isFirstFocusOut: false,
        validateFunction: checkText,
        element: USERNAME,
        pattern: USERNAME_PATTERN,
    },
    {
        name: "greatHouse",
        isFirstFocusOut: false,
        validateFunction: checkSelect,
        element: GREAT_HOUSE,
        pattern: GREAT_HOUSES_LIST,
    },
    {
        name: "preferences",
        isFirstFocusOut: false,
        validateFunction: checkText,
        element: PREFERENCES,
        pattern: PREFERENCES_PATTERN,
    },
];

/**
 * Change focusOut state of some input and call a validate function
 *
 * @param inputName Name of input
 */
function changeFocusState(inputName) {
    for (let input of INPUT_LIST) {
        if (input.name === inputName) {
            input.isFirstFocusOut = true;
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
    for (let input of INPUT_LIST) {
        if (input.name === inputName && input.isFirstFocusOut) {
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
    if (checkText(EMAIL, EMAIL_PATTERN) && checkText(PASS, PASS_PATTERN)) {
        LOGIN_FORM.classList.add("hidden");
        INFO_FORM.classList.remove("hidden");
    }
}

/**
 * Check info fields
 */
function saveInfo() {
    checkText(USERNAME, USERNAME_PATTERN);
    checkSelect(GREAT_HOUSE, GREAT_HOUSES_LIST);
    checkText(PREFERENCES, PREFERENCES_PATTERN);
}
