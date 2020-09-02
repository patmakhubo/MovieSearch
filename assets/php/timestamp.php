<?php 
class timestamp {
    private $timestamp;
    function __construct() {
        date_default_timezone_set("Africa/Johannesburg");
        $this->timestamp = strftime('%d-%B-%Y %H:%M:%S',time());
    }
    public function getTimeStamp() {
        return $this->timestamp;
    }
}
?>