<?php require_once("../assets/php/session.php"); ?>
<?php require_once("../assets/php/DBController.php"); ?> 
<?php require_once("../assets/php/timestamp.php");?>  


<?php
ob_start(); //Turns on output buffering 


$DB = DBController::getInstance();
$con = $DB->getConnection();

?>