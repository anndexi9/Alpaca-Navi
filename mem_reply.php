<!DOCTYPE html>
<html>
<head>
<?php 
session_start();

if (!isset($_GET["thr"]))
header("location:alpacaThread.html");
if (!isset($_SESSION["username"]))
header("location:mem_need_login.php");
//echo $_GET["thr"];
//echo $_SESSION["username"];
?>
<meta charset="UTF-8">
    <title>アルパカチャンネル</title>
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    
    

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<!-- Latest compiled JavaScript -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/embed.js/3.6.2/embed.min.js"></script>
<script src="mem_reply.js"></script>
<script src="alpaca.js"></script>
<script src="spot.js"></script>
<script src="pagination.js"></script>
 <link rel="stylesheet" href="alpacaThread.css">

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
<header>
<h2><b>アルパカナビ<span class="glyphicon glyphicon-search"></span>
</b><small style="color:white">アルパカとあえるスポット探し</small></h2></header>
<div id="nav01"><ul>
<li><a href="alpacaTop.html">トップページ</a></li>
<li><a href="alpacaMap.html">マップ</a></li>
<li><a href="alpacaDB.html">データベース</a></li>
<li><a href="mem_poll1.php">投票</a></li>
<li><a href="alpacaThread.html">掲示板</a></li>
<li id="loginLink"></li>
</ul></div>  
<a href="alpacaThread.html">掲示板に戻る</a><br><br>

<button class="btn btn-success" type="button" 
data-toggle="collapse" data-target="#collapseForm" 
aria-expanded="false" aria-controls="collapseForm"
style="font-size: 26px;">スレッド＃<?php echo $_GET["thr"];?>に返信する</button>

<div class="collapse" id="collapseForm">
  <div class="well">
   <form id ="replyThread" method="POST">
     <input type="hidden" name="thr" value="<?php echo $_GET["thr"];?>">
    <div id="msg-group" class="form-group">
<textarea id ="msg" name="msg" rows="10" cols="50" class="form-control"></textarea>
      </div>
    <br><input type="submit" name="submit" class="btn btn-success" value="送信">
    <span class="fa fa-arrow-right"></span>
</form>
</div></div>
<br>

<br><br>
<div id ="displayThread"></div>
<br><br>
<a href="alpacaThread.html">掲示板に戻る</a>
<br>
<footer>
2016 © Andie H. All rights reserved.
</footer>
</body>

</html>
