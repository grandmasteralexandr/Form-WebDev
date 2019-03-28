<?php
require_once "config.php";
session_start();

if (isset($_POST["loginForm"]) && validateLogin()) {
    $_SESSION["infoForm"] = true;
}

if (isset($_POST["infoForm"]) && validateInfo()) {
    unset($_SESSION["infoForm"]);
}

header("location: ../index.php");

function validateLogin()
{
    if (!isset($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $_SESSION["error"]["email"] = "Invalid email";
    }

    if (!isset($_POST["pass"]) || strlen($_POST["pass"]) < 8) {
        $_SESSION["error"]["pass"] = "Password less than 8 characters";
    }

    if (isset($_SESSION["error"])) {
        return false;
    }

    return true;
}

function validateInfo()
{
    if (!isset($_POST["username"]) || !preg_match(USERNAME_PATTERN, $_POST["username"])) {
        $_SESSION["error"]["username"] = "Invalid username";
    }

    if (!isset($_POST["great-house"]) || !array_key_exists($_POST["great-house"], GREAT_HOUSES_LIST)) {
        $_SESSION["error"]["housesList"] = "Select your house";
    }

    if (!isset($_POST["preferences"]) || strlen($_POST["preferences"]) < 1) {
        $_SESSION["error"]["preferences"] = "Fill preferences";
    }

    if (isset($_SESSION["error"])) {
        return false;
    }

    return true;
}
