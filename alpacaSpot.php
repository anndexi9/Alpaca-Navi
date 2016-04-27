<?php
/*if ((!isset($_POST['id'])) || (!isset($_POST['name']))){
    header("location:alpacaMap.html");}*/

//if ($_SERVER["REQUEST_METHOD"] == "GET"){
    $id = '01'; //sanitize_input($_GET['id']);
    //$spot_name = sanitize_input($_GET['name']);

    $link=connectMySQL();
 
//function show_spot_detail($link,$id){
    $query  = "SELECT * FROM alpaca_spot WHERE spot_id='".$id."'";
    $result = mysqli_query($link,$query);

    if (!$result) die($link->error);
    
    $spot=array();

    $row=mysqli_fetch_assoc($result);
    
    $spot['spot_id'] = $row['spot_id'];
    $spot['spot_name'] = utf8_encode($row['spot_name']);
    $spot['area'] = $row['area'];
    $spot['lat']=$row['lat'];
    $spot['lng']=$row['lng'];
    $spot['address'] = $row['address'];
    $spot['link'] = $row['link'];
    /*
    header('Content-Type: application/json');
    echo json_encode($spot);*/
    
    if (!$result) die($link->error);
//} 

//function show_spot_thread($link,$id){
   
    $query1  = "SELECT * FROM mem_thread WHERE s_id='".$id."'ORDER BY timestamp DESC";
    $result1 = mysqli_query($link,$query1);
    
    if (!$result1) die($link->error);
    
    $count= mysqli_num_rows($result1);
    
    $thread=array();
    $i = 0;

if ($count>0){    
while($rows=mysqli_fetch_assoc($result1)){
    
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
//}
/*header('Content-Type: application/json');
    echo json_encode($thread);*/
    
    if (!$result) die($link->error);
}
//}
    
 function sanitize_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
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
    mysqli_set_charset($link,'UTF8');

return $link;
}//end connect
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>    
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="alpaca.css">
<script src="alpaca.js"></script>
      <script src="https://cdn.jsdelivr.net/embed.js/3.6.2/embed.min.js"></script>
<script src="spot.js"></script>
<script src="pagination.js"></script>
    <script>
    window.onload = function()
    {
      console.log(document.getElementById('displayThread').innerHTML);
      var x = new EmbedJS({
        element: document.getElementById('displayThread'),
        googleAuthKey : 'AIzaSyCqFouT8h5DKAbxlrTZmjXEmNBjC69f0ts',
        inlineEmbed:'all'
      });

      x.render();
    };
    </script>
</head>
<body>
<div class="flex-container">
<header>
<h2><b>アルパカナビ<span class="glyphicon glyphicon-search"></span>
</b><small style="color:white">アルパカとあえるスポット探し</small></h2></header>

<div id="nav01"><ul>
<li><a href="alpacaTop.html">トップページ</a></li>
<li><a href="alpacaMap.html">マップ</a></li>
<li><a href="alpacaDB.php">データベース</a></li>
<li><a href="mem_poll1.php">投票</a></li>
<li><a href="alpacaThread.html">掲示板</a></li>
<li id="loginLink"></li>
</ul></div>

<div id="displayMain">
<?php echo utf8_encode($spot['spot_name']);?>


<?php /*
for($i=0;$i<sizeof($thread);$i++){
    echo $thread[$i]['thread_id'] ;
    echo $thread[$i]['timestamp'];
    echo $thread[$i]['author'];
    echo $thread[$i]['category'];
    echo $thread[$i]['subcat'];
    echo $thread[$i]['title'];
    echo $thread[$i]['comment'];
    echo $thread[$i]['reply'];
}*/?>
<div id="displayThread"></div>
</div>
<footer>
2016 © Andie H. All rights reserved.
</footer>
</div>
</body>
</html>