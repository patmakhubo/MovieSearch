<?php

    class DBController {
        //declare variables
        private $host = "localhost";
        private $username = "root";
        private $password = "";
        private $dbName = 'moviesearch';
        private static $instance;

        private $conn;

        public static function getInstance() {
            if(!self::$instance){
                self::$instance = new self();
            }
            return self::$instance;
        }

        function __construct() {
            $this->conn = $this->connect();
            if(mysqli_connect_error()){
                trigger_error("Failed MySQL Connection: ".mysqli_connect_error(), E_USER_ERROR);
            }
        }
        function connect(){
        // Create connection
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbName);
            return $this->conn;
        }
        public function getConnection() {
            return $this->conn;
        }  
        private function __clone() {
            return null;
        }
    }
?>