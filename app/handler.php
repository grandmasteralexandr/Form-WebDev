<?php
require_once "config.php";
session_start();

if (isset($_POST["loginForm"]) && checkLogin()) {
    $_SESSION["infoForm"] = true;
}

if (isset($_POST["infoForm"]) && checkInfo()) {
    unset($_SESSION["infoForm"]);
}

header("location: ../index.php");

function checkLogin()
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

function checkInfo()
{
    return true;
}
