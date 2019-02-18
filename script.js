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

const EMAIL_PATTERN = /^[-+A-Za-z0-9.]+@([A-Za-z0-9][-A-Za-z0-9.]+[A-Za-z0-9])\.[A-Za-z]{2,4}$/;
const PASS_PATTERN = /.{8,}/;
const USERNAME_PATTERN = /[-_A-Za-z0-9]{3,}/;

const INPUT_LIST = [
    {
        name: "email",
        isFirstFocusOut: false,
        validateFunction: "checkText",
        element: EMAIL,
        pattern: EMAIL_PATTERN,
    },
    {
        name: "pass",
        isFirstFocusOut: false,
        validateFunction: "checkText",
        element: PASS,
        pattern: PASS_PATTERN,
    },
    {
        name: "username",
        isFirstFocusOut: false,
        validateFunction: "checkText",
        element: USERNAME,
        pattern: USERNAME_PATTERN,
    },
    {
        name: "greatHouse",
        isFirstFocusOut: false,
        validateFunction: "checkSelect",
        element: GREAT_HOUSE,
        pattern: GREAT_HOUSES_LIST,
    },
];

function changeFocusState(inputName) {
    for (let input of INPUT_LIST) {
        if (input.name === inputName) {
            input.isFirstFocusOut = true;
            [input.validateFunction](input.element, input.pattern);
        }
    }
}

function checkFocusState(inputName) {
    for (let input of INPUT_LIST) {
        if (input.name === inputName && input.isFirstFocusOut) {
            [input.validateFunction](input.element, input.pattern);
        }
    }
}

function checkText(element, pattern) {
    if (element.match(pattern)) {
        element.classList.remove("input-error");
        return true;
    } else {
        element.classList.add("input-error");
        return false;
    }
}

function checkSelect(element, selectList) {
    if (selectList.contains(element.value)) {
        element.classList.remove("input-error");
    } else {
        element.classList.add("input-error");
    }
}

function login() {
    if (checkText(EMAIL, EMAIL_PATTERN) && checkText(PASS, PASS_PATTERN)) {
        LOGIN_FORM.classList.add("hidden");
        INFO_FORM.classList.remove("hidden");
    }
}
