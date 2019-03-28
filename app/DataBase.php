<?php

namespace shpp\wd\aokunev;

require_once "config.php";

class DataBase
{
    private $users;

    public function __construct()
    {
        if (!file_exists(DB_FILE)) {
            $this->createResult();
        }

        $this->users = json_decode(file_get_contents(DB_FILE));
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }

    private function createResult()
    {
        file_put_contents(DB_FILE, json_encode([]));

        if (!(is_readable(DB_FILE) && is_writable(DB_FILE))) {
            header("location: ../500.html");
            exit();
        }
    }
}