<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Feedback</title>
        <link rel="stylesheet"
              href="./css/style.css">
    </head>

    <body>

        <form action="logout.php"
              method="POST">
            <center>
                <input type="submit"
                       value="Logout"
                       name="logout">
            </center>
        </form>
        <?php 
            session_start();
            require 'config.php';
            if (isset($_SESSION['login_user'])) {
                $userLoggedIn = $_SESSION['login_user'];
                $result = mysqli_query($con,"SELECT * FROM `request` ORDER BY id DESC");

                echo 
                "<table border='1' id='customers'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Film Title</th>
                        <th>Message</th>
                        <th>Sumbmission Date</th>
                    </tr>";

                while($row = mysqli_fetch_array($result)){
                    echo "<tr>";
                    echo "<td>" . $row['name'] . "</td>";
                    echo "<td>" . $row['email'] . "</td>";
                    echo "<td>" . $row['title'] . "</td>";
                    echo "<td>" . $row['message'] . "</td>";
                    echo "<td>" . $row['timecreated'] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";                                                                    
            }
        ?>

    </body>

</html>
