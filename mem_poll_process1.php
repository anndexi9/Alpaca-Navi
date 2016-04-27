<?php

session_start();

if (($_REQUEST["act"]=="process") && (isset($_SESSION["username"])))
{
    if (can_poll(connectMySQL()))
    {
    $vote1=$_REQUEST["vote"];
    process_pollDB(connectMySQL(),$vote1);
    get_poll_fig($vote1); 
}else    get_poll_fig(-1); 
}

function can_poll($link){
    //connected
//check member poll record if logged in
     $sql ="SELECT * FROM mem_poll1 WHERE mem_login_id ='".$_SESSION["username"]."'";
     $result =mysqli_query($link,$sql);
     $count = mysqli_num_rows($result);
    
if ($count==0) return true;
else return false;
}

function get_poll_fig($vote){
    //get content of textfile
$filename = "mem_poll_result1.txt";
$content = file($filename);

//put content in array
$array = explode("||", $content[0]);
$wh = $array[0];
$tea = $array[1];
$blk = $array[2];
$mix = $array[3];

 if($vote>=0){
if ($vote == 0) 
  $wh++;

if ($vote == 1) 
  $tea++;

if ($vote == 2) 
  $blk++;

if ($vote == 3) 
  $mix++;
  
 //insert votes to txt file
$insertvote = $wh."||".$tea."||".$blk."||".$mix;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
 } 

$total = $wh + $tea + $blk + $mix;

$poll1=array();
$poll1['wh']=100*round($wh/$total,2);
$poll1['tea']=100*round($tea/$total,2);
$poll1['blk']=100*round($blk/$total,2);
$poll1['mix']=100*round($mix/$total,2);
$poll1['vote']=$vote;

header('Content-Type: application/json');

echo json_encode($poll1);
}

function process_pollDB($link,$vote){
    
    $vote = $_REQUEST['vote'];
    
    //insert record of vote
 $sql1  = "INSERT INTO mem_poll1(mem_login_id, mem_vote)".
 "VALUES( '".$_SESSION["username"]."', '".$vote."')";

    $result1 = mysqli_query($link, $sql1);
    
    if (!$result1) die($link->error);

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
