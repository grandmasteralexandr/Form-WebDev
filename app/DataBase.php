<?php

namespace shpp\wd\aokunev;

require_once "config.php";

class DataBase
{
    private $users;

    public function __construct()
    {
        if (!file_exists(DB_FILE)) {
            $this->createFile();
        }

        $this->users = json_decode(file_get_contents(DB_FILE), true);
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }

    public function save($json)
    {
        file_put_contents(DB_FILE, $json);
        $this->checkPermission();
    }

    private function createFile()
    {
        file_put_contents(DB_FILE, "");
        $this->checkPermission();
    }

    private function checkPermission()
    {
        if (!(is_readable(DB_FILE) && is_writable(DB_FILE))) {
            header("location: ../500.html");
            exit();
        }
    }
}
