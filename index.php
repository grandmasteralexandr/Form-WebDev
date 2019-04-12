<?php
require_once "app/config.php";
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/slider.css">
    <title>Form shpp Web Dev</title>
  </head>
  <body>
    <div class="wrapper">
      <section class="left-main-block">
        <div class="slider-container">
          <div class="slider">
              <?php foreach (GREAT_HOUSES_LIST as $key => $value): ?>
                <div class="slider__item">
                  <img src="img/<?= $key ?>.jpg" alt="<?= $value ?>">
                </div>
              <?php endforeach; ?>
          </div>
        </div>

      </section>
      <section class="right-main-block">
        <h1 class="head">GAME OF THRONES</h1>

          <?php if (!isset($_SESSION["infoForm"])): ?>
            <form action="app/handler.php" method="post" class="login-form" id="login-form">
              <label for="email" class="form__label">Enter your email</label>
                <?php echo isset($_SESSION["error"]["email"]) ? ("<p class='error-msg'>" . $_SESSION['error']['email'] . "</p>") : "" ?>
              <input type="email" class="form__input" name="email" id="email" placeholder="arya@westeros.com">

              <label for="pass" class="form__label">Choose secure password</label>
              <p class="form__hint">Must be at least 8 characters</p>
                <?php echo isset($_SESSION["error"]["pass"]) ? ("<p class='error-msg'>" . $_SESSION['error']['pass'] . "</p>") : "" ?>
              <input type="password" class="form__input" name="pass" id="pass" placeholder="password">


              <div class="form__checkbox-block">
                <input type="checkbox" class="form__checkbox" name="remember-me" id="remember-me">
                <label for="remember-me" class="form__label checkbox-label">Remember me</label>
              </div>

              <input type="hidden" name="loginForm">
              <input type="submit" class="form__button" id="login-form-button" value="Sign Up">
            </form>

          <?php else: ?>
            <form action="app/handler.php" method="post" class="info-form" id="info-form">
              <p class="info-message">
                You've successfully joined the game.<br>
                Tell us more about yourself.
              </p>

              <label for="username" class="form__label">Who are you?</label>
              <p class="form__hint">Alpha-numeric user name</p>
                <?php echo isset($_SESSION["error"]["username"]) ? ("<p class='error-msg'>" . $_SESSION['error']['username'] . "</p>") : "" ?>
              <input type="text" class="form__input" name="username" id="username" placeholder="arya">

              <label for="great-house" class="form__label">Your Great House</label>
                <?php echo isset($_SESSION["error"]["housesList"]) ? ("<p class='error-msg'>" . $_SESSION['error']['housesList'] . "</p>") : "" ?>
              <select name="great-house" id="great-house" class="form__input form__select">
                <option value="" class="form__option"></option>
                  <?php foreach (GREAT_HOUSES_LIST as $key => $value): ?>
                    <option value="<?= $key ?>" class="form__option"><?= $value ?></option>
                  <?php endforeach; ?>
              </select>

              <label for="preferences" class="form__label">Your preferences, hobbies, wishes, etc.</label>
                <?php echo isset($_SESSION["error"]["preferences"]) ? ("<p class='error-msg'>" . $_SESSION['error']['preferences'] . "</p>") : "" ?>
              <textarea class="form__input preferences" name="preferences" id="preferences"
                        placeholder="I have a long TOKILL list..."></textarea>

              <input type="hidden" name="infoForm">
              <input type="submit" class="form__button" id="info-form-button" value="Save">
            </form>
          <?php endif; ?>

      </section>
    </div>
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.full.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/validate.js"></script>
  </body>
</html>

<?php unset($_SESSION["error"]) ?>
