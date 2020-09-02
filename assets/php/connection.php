<?php require_once("session.php"); ?>
<?php require_once("DBController.php"); ?> 
<?php require_once("timestamp.php");?>  
<?php
    if(!isset($_POST['submit'])) {
        // Escape user inputs for security
        $DB = DBController::getInstance();
        $connection = $DB->getConnection();
        $title = $connection->real_escape_string($_POST['movietitle']);
        $firstname = $connection->real_escape_string($_POST['name']);
        $email = $connection->real_escape_string($_POST['email']);
        $message = $connection->real_escape_string($_POST['message']);
        $t = new timestamp();
        $time = $t->getTimeStamp();
        // Attempt insert query execution
        $sqli = "INSERT INTO `request` (`name`,`email`,`title`,`message`,`timecreated`) VALUES (?,?,?,?,?)";
            $stmt = mysqli_stmt_init($connection);    
        if(mysqli_stmt_prepare($stmt, $sqli)){
            mysqli_stmt_bind_param($stmt, "sssss", $firstname, $email,  $title, $message, $time);
            mysqli_stmt_execute($stmt);
            $_SESSION["SuccessMessage"] ="Records inserted successfully.";
            setcookie("SuccessMessage",$_SESSION["SuccessMessage"], time()+86400/24, "/");
            header("Location: /MovieSearch/index.html");
            exit();
        } else{
            $_SESSION["ErrorMessage"] ="ERROR: Could not execute"; //$sql. " . $connection->error;
            setcookie("ErrorMessage",$_SESSION["ErrorMessage"], time()+86400/24, "/");
            header("Location: /MovieSearch/index.html");
            exit();
        }
        // Close connection
        $connection->close();
    }
?>