<?php
session_start();

if (isset($_POST["loginForm"])) {
    $_SESSION["infoForm"] = true;
}

if (isset($_POST["infoForm"])) {
    unset($_SESSION["infoForm"]);
}

header("location: ../index.php");
