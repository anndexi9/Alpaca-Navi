<?php

$userN=sanitize_input($_POST["uname"]);
$userpw=sanitize_input($_POST["pw"]);
$usermail=sanitize_input($_POST["email"]);

$exist="N";

$con = connectMySQL();

if ($_POST["act"]=="check"){
if (existing_user($con, $userN, $usermail))
{
    
     $exist="Y";
}
header('Content-Type: application/json');
echo json_encode($exist);
mysqli_close($con);
}

if ($_POST["act"]=="reg"){
add_user($con, $userN, $userpw, $usermail);
mysqli_close($con);
}

//connection
function connectMySQL() {
$host = "127.0.0.1";
    $user = "anndexi9";
    $pass = "";
    $db = "alpaca_navi";        
    $port = 3306;

    // Create connection
    $link = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    if (!$link) die('DB接続失敗');
// mysql_set_charset('UTF-8',$link);

return $link;
}


function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

function existing_user($link,$un, $em){
    
    $sqlun="SELECT mem_login_id FROM login_info WHERE mem_login_id= '$un'";
    $sqlem="SELECT mem_email FROM login_info WHERE mem_email= '$em'";
    
    $resultun = mysqli_query($link,$sqlun);
    $resultem = mysqli_query($link,$sqlem);
    
    $resultun_no = mysqli_num_rows($resultun);
    $resultem_no = mysqli_num_rows($resultem);
    
if ((!$resultun) || (!$resultem)) die($link->error);
    
if(($resultun_no>0) || ($resultem_no>0))
    return true;
else return false;
 }
 
function add_user($link, $un, $pw, $em){
    
    $query  = "INSERT INTO login_info(mem_login_id, mem_pw, mem_email) VALUES( '$un', '$pw', '$em')";

    $result = mysqli_query($link,$query);
    
    if (!$result) die($link->error);
  }

?>