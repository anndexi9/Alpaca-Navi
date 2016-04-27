<!DOCTYPE html>
<html>
<head>
<?php
if (isset($_COOKIE['cookiename']) && isset($_COOKIE['cookiepw']) === TRUE) {
    $myusername = $_COOKIE['cookiename'];
    $mypassword = $_COOKIE['cookiepw'];
} else {
    $myusername = '';
    $mypassword = '';
}
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="alpaca.css">
<script src="alpaca.js"></script>
<script src="mem_login.js"></script>
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

<div id ="displayMain">
<form class="form-horizontal col-sm-12 col-md-12" id ="loginForm">
<h3 style="font-weight:bold; text-align:center;">ログイン</h3>
<h4>*この機能を使うにはログインが必要です。*</h4>
<a href="mem_signup.html">新規会員登録はこちら</a>
<br><br>
	<div id="name-gp" class="form-group"><label class="col-sm-2 control-label">ユーザネーム</label>
	<div class="col-sm-10">
	<input class= "form-control" type="text" name="myusername" id="uname"></div></div>
    <div id="pw1-gp" class="form-group"><label class="col-sm-2 control-label">パスワード</label>
    <div class="col-sm-10">
    <input class= "form-control" type="password" name="mypassword" id="pw1"></div></div>

   <div class="has-success col-sm-offset-2 col-sm-10">
  <div class="checkbox">
    <label>
      <input type="checkbox" id="cookieOption" value="cookieOn">
      ユーザ名とパスワードを記憶させる
    </label>
  </div>
</div><br>
    <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
  <input class= "btn btn-success" type="submit" value="送信"></div></div>
</form>


</div>


<footer>
2016 © Andie H. All rights reserved.
</footer>

</div>
</body>
</html>
