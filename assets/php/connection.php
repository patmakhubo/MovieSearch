<?php require_once("session.php"); ?>
<?php require_once("DBController.php"); ?> 
<?php require_once("timestamp.php");?>  
<?php
echo 
'
<h1>Please Wait!</h1>
<style>
.dots-group {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: white;
    filter: contrast(20);
  }
  h1 {
    left: 50%;
    position: absolute;
    text-align: center
  }
    .dot{
      position: absolute;
      width: 16px;
      height: 16px;
      top: 12px;
      
      filter: blur(4px);
      background: #000;
      border-radius: 50%;
      transform: translateX(0);
      animation: dot 2.8s infinite;
  }
    .dots {
      transform: translateX(0);
      margin-top: 12px;
      margin-left: 31px;
      animation: dots 2.8s infinite;
    }
      span{
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-left: 16px;
        filter: blur(4px);
        background: #000;
        border-radius: 50%;
      }
  @keyframes dot {
    50%{
      transform: translateX(96px);
  }}
  @keyframes dots{
    50%{
      transform: translateX(-31px);
    }}
</style>
<div class="dots-group">
  <span class="dot"></span>
  <div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
';
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
            $sub = "Movie Request";
            $body = "Hi ".$firstname.", we have successfully recieved your request, we will get back to you";
            $headers = "From: km4qrlb97@pihe.ac.za";
            ?>
            <?php 
            if(mail($email, $sub, $body, $headers)){
                echo 
                '<script>
                    alert("Thanks '.$firstname.'\nYou\'ve submitted the form successfully. We sent you an email");
                </script>';
            }else {
                echo 
                '<script>
                    alert("Thanks '.$firstname.'\nYou\'ve submitted the form successfully. Could not send email");
                </script>';
            }
            ?>
            <?php
            header("Refresh:2; url= /MovieSearch/index.html");
            exit();
        } else{
            ?>
            <?php 
                echo 
                '<script>
                alert("Sorry '.$firstname.'\nsomething went wrong, please try again");
                </script><h1>Please Wait</h1>';
            ?>
            <?php
            header("Refresh:2; url=  /MovieSearch/index.html");
            exit();
        }
        // Close connection
        $connection->close();
    }
?>