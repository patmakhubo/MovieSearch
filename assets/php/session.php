<?php
    function Message() {
        if(isset($_SESSION["ErrorMessage"])) {
            $print = '<div>';
            $print .= '<h1>htmlentities($_SESSION["ErrorMessage"]));</h1>';
            $print .='</div>';
            $_SESSION["ErrorMessage"] = null;
            return $print;
        } else if(isset($_SESSION["SuccessMessage"])) {
            $print = '<div>';
            $print .= '<h1>htmlentities($_SESSION["SuccessMessage"]));</h1>';
            $print .='</div>';
            $_SESSION["SuccessMessage"] = null;
            return $print;
        }
    }
?>