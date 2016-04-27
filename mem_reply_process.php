<?php
session_start();



if (($_POST['act']=="show") && (connectMySQL())){
 
    $thr=$_POST['thr'];
    show_thread(connectMySQL(),$thr);
 
}

if (($_POST['act']=="reply") && (connectMySQL())){
    $thr=$_POST['thr'];
    $msg = sanitize_input($_POST["msg"]);
    $auth =  $_SESSION["username"];
    $dtime = date('Y-m-d H:i:s');
    reply_thread(connectMySQL(), $thr, $msg, $auth, $dtime);
}


function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

function reply_thread($link, $thread, $message, $author, $datetime){
    
$query  = "INSERT INTO mem_ans(thread_id,comment,mem_login_id,timestamp) VALUES(  
        '$thread','$message', '$author', '$datetime')";

$result = mysqli_query($link,$query);
    
    if (!$result) die($link->error);

//get reply no    
$query1  = "SELECT * FROM mem_thread WHERE thread_id='".$thread."'";

$result1 = mysqli_query($link,$query1);

$row=mysqli_fetch_assoc($result1);

$reply_no=$row["reply"];

    
    if (!$result1) die($link->error);
    
//update reply no    
$query2  = "UPDATE mem_thread SET reply='". ++$reply_no .
"'WHERE thread_id='". $thread."'";

$result2 = mysqli_query($link,$query2);
    
    if (!$result2) die($link->error);
  }
  
function show_thread($link,$thread){
    
    $query  = "SELECT * FROM mem_thread WHERE thread_id = '".$thread."'";
    
    $result = mysqli_query($link,$query);
    
    $count=mysqli_num_rows($result);
    
    $thr1=array();
    $thr2=array();
    
if ($count==1){
    
    $rows=mysqli_fetch_assoc($result);
    
    $thr1['thread_id'] = $rows['thread_id'];
    $thr1['timestamp'] = $rows['timestamp'];
    $thr1['author'] = $rows['mem_login_id'];
    $thr1['category'] = $rows['category'];
    $thr1['subcat'] = $rows['sub_cat'];
    $thr1['title'] = $rows['title'];
    $thr1['comment'] = $rows['comment'];
    $thr1['reply'] = $rows['reply'];
    $thr1['replyArr'] = null;
  
    $query1  = "SELECT * FROM mem_ans where thread_id = '".$thread ."' ORDER BY timestamp";
    $result1 = mysqli_query($link,$query1);
    
    $count1=mysqli_num_rows($result1);
    
    if ($count1>0){
        $j=0;
        while($rows1=mysqli_fetch_assoc($result1))
        {
            $thr2[$j]['ans_id'] = $rows1['ans_id'];
            $thr2[$j]['comment'] = $rows1['comment'];
            $thr2[$j]['author'] = $rows1['mem_login_id'];
            $thr2[$j]['timestamp'] = $rows1['timestamp'];
            $j++;
        }
    }
    
    $thr1['replyArr']=$thr2;
    
}else header('location: alpacaThread.html');
    
header('Content-Type: application/json');
    echo json_encode($thr1);
    
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
// mysql_set_charset('UTF-8',$link);

return $link;
}

    
?>
