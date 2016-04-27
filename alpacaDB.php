<?php


session_start();


if ($_POST['act']=="spot"){
 if (connectMySQL()) {
 
    $s_id=sanitize_input($_POST['sp_id']);
    show_spot_thread(connectMySQL(),$s_id);
 
} else print 'DB接続失敗';
}


function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}


function show_spot_thread($link,$id){
    
    $query  = "SELECT * FROM mem_thread WHERE s_id ='".$id."' ORDER BY timestamp DESC";
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
// mysql_set_charset('UTF-8',$link);

return $link;
}

    
?>
