<?php
session_start();


if ($_POST['act']=="checkLogin"){
    $arr=array();
    if (isset($_SESSION["username"]))
    $arr["login"]="Y";
    else  $arr["login"]="N";
    
    echo json_encode($arr);
}

?>