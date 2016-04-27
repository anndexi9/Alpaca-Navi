<?php


session_start();

if ($_POST['act']=="checkLogin"){
    $arr=array();
    if (isset($_SESSION["username"]))
    $arr["login"]="Y";
    else  $arr["login"]="N";
    
    echo json_encode($arr);
}

if ($_POST['act']=="show"){
 if (connectMySQL()) {
 
    show_thread(connectMySQL());
 
} else print 'DB接続失敗';
}

if ($_POST['act']=="add"){
 if (connectMySQL()) {
    
    $cate = sanitize_input($_POST["category"]);
    $sub = sanitize_input($_POST["sub_cat"]);
    $subv = sanitize_input($_POST["sub_cat1"]);
    $tit = sanitize_input($_POST["title"]);
    $msg = sanitize_input($_POST["msg"]);
    $auth =  $_SESSION["username"];
    //$auth =  "testUserName01";
    $dtime = date('Y-m-d H:i:s');
 
      add_thread(connectMySQL(), $cate, $sub, $subv, $tit, $msg, $auth, $dtime);
    
} else print 'DB接続失敗';
}


function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

function add_thread($link, $category, $subcat, $subcat1, $title, $message, $author, $datetime){
    
    $query  = "INSERT INTO mem_thread(category,sub_cat,s_id,title,comment,mem_login_id,timestamp,reply) VALUES( '$category', '$subcat', '$subcat1','$title', '$message', '$author', '$datetime', 0)";

$result = mysqli_query($link,$query);
    
    if (!$result) die($link->error);
  }
  
function show_thread($link){
    
    $query  = "SELECT * FROM mem_thread ORDER BY timestamp DESC";
    $result = mysqli_query($link,$query);
    
    $thread=array();
    $i = 0;

while($rows=mysqli_fetch_assoc($result)){
    
    $thread[$i]['thread_id'] = $rows['thread_id'];
    $thread[$i]['timestamp'] = $rows['timestamp'];
    $thread[$i]['author'] = $rows['mem_login_id'];
    $thread[$i]['category'] = $rows['category'];
    $thread[$i]['subcat'] = $rows['sub_cat'];
    $thread[$i]['title'] = $rows['title'];
    $thread[$i]['comment'] = $rows['comment'];
    $thread[$i]['reply'] = $rows['reply'];
        
    $i++;
}
    
header('Content-Type: application/json');
    echo json_encode($thread);
    
    if (!$result) die($link->error);
  }
   

//connection
function connectMySQL() {
$host = "";
    $user = "";
    $pass = "";
    $db = "";        
    $port = ;

    // Create connection
    $link = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    mysqli_set_charset('UTF-8',$link);

return $link;
}//end connect

    
?>
