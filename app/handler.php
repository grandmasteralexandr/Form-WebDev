<?php
require_once "config.php";
require_once "DataBase.php";

use shpp\wd\aokunev\DataBase;

session_start();

if (isset($_POST["loginForm"]) && validateLogin()) {
    $db = new DataBase();
    $users = $db->getUsers();

    if (array_key_exists($_POST["email"], $users)) {
        $_SESSION["error"]["email"] = "This email already registered";
    }

    if (!isset($_SESSION["error"])) {
        $users[$_POST["email"]] = ["pass" => $_POST["pass"]];
        $db->save(json_encode($users));
        $_SESSION["user"] = $_POST["email"];
        $_SESSION["infoForm"] = true;
    }

}

if (isset($_POST["infoForm"]) && validateInfo()) {
    $db = new DataBase();
    $users = $db->getUsers();
    $users[$_SESSION["user"]] += [
        "username" => $_POST["username"],
        "great-house" => $_POST["greatHouse"],
        "preferences" => $_POST["preferences"],
    ];
    $db->save(json_encode($users));
    unset(
        $_SESSION["infoForm"],
        $_SESSION["user"]
    );
    echo 'ok';
    exit();
}

header("location: ../index.php");

/**
 * Validate login form
 *
 * @return bool
 */
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

/**
 * Validate login form
 *
 * @return bool
 */
function validateInfo()
{
    if (!isset($_POST["username"]) || !preg_match(USERNAME_PATTERN, $_POST["username"])) {
        $_SESSION["error"]["username"] = "Invalid username";
    }

    if (!isset($_POST["greatHouse"]) || !array_key_exists($_POST["greatHouse"], GREAT_HOUSES_LIST)) {
        $_SESSION["error"]["housesList"] = "Select your house";
    }

    if (!isset($_POST["preferences"]) || strlen($_POST["preferences"]) < 1) {
        $_SESSION["error"]["preferences"] = "Fill preferences";
    }

    if (isset($_SESSION["error"])) {
        echo json_encode($_SESSION["error"]);
        unset($_SESSION["error"]);
        exit();
    }

    return true;
}
