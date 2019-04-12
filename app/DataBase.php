<?php

namespace shpp\wd\aokunev;

require_once "config.php";

/**
 * Represent data base
 */
class DataBase
{
    /**
     * @var array Users list
     */
    private $users;

    /**
     * DataBase constructor.
     */
    public function __construct()
    {
        if (!file_exists(DB_FILE)) {
            $this->createFile();
        }

        $this->users = json_decode(file_get_contents(DB_FILE), true);
    }

    /**
     * @return array
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @param $json string json to save
     */
    public function save($json)
    {
        file_put_contents(DB_FILE, $json);
        $this->checkPermission();
    }

    /**
     * Create db file
     */
    private function createFile()
    {
        file_put_contents(DB_FILE, "");
        $this->checkPermission();
    }

    /**
     * Check file permission
     */
    private function checkPermission()
    {
        if (!(is_readable(DB_FILE) && is_writable(DB_FILE))) {
            header("location: ../500.html");
            exit();
        }
    }
}
