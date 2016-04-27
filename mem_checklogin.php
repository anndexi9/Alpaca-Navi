<?php

$myusername = sanitize_input($_POST['uname']);
$mypassword = sanitize_input($_POST['pw']);
$login="N";

$con=connectMySQL();

if ($_POST['act']=="check"){
if (check_mem_login($con,$myusername,$mypassword)){
session_start();
$_SESSION["username"] = $myusername;
cookie_setting($myusername,$mypassword);
$login="Y";
}else $login="N";

header('Content-Type: application/json');
echo json_encode($login);
mysqli_close($con);
}

function check_mem_login($link,$myuname,$mypw){
$query="SELECT * FROM login_info WHERE mem_login_id='".$myuname.
"' and mem_pw='".$mypw."'";
$result=mysqli_query($link,$query);

$count=mysqli_num_rows($result);

// if username & pw matched 
if($count==1) return true;
else return false;
}//end check mem login


function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}//end sanitize

function connectMySQL() {
$host = "127.0.0.1";
    $user = "anndexi9";
    $pass = "";
    $db = "alpaca_navi";        
    $port = 3306;

    // Create connection
    $link = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    mysqli_set_charset('UTF-8',$link);

return $link;
}//end connect

function cookie_setting($myuname,$mypw){
 
if (isset($_POST['cookieOn']) === TRUE) {
    $cookie_check = $_POST['cookieOn'];
    
    
if ($cookie_check=='checked'){
if (isset($_COOKIE['cookiename'])=== TRUE) {
    $_COOKIE['cookiename']=$myuname;
    $_COOKIE['cookiepw']=$mypw;
} else {
    setcookie($cookiename, $myuname, time() + 60 * 60 * 24 * 365);
    setcookie($cookiepw, $mypw);
}
}
} else {
    $cookie_check = ''; 
    /*echo "cookie not checked";
    exit;*/
    
    if (isset($_COOKIE['cookiename'])=== TRUE) {
    setcookie('cookiename', '', time() - 3600);
    setcookie('cookiepw', '');
    }
}
}//end cookie


?>
