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
 <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>     
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="alpaca.css">
<script src="alpaca.js"></script>


</head>
<body>
<div class="flex-container">
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

<div id ="displayMain">
<form name = "loginform" action="mem_checklogin.php"  method="post">
<h3 style="font-weight:bold; text-align:center;">ログイン</h3>
<h4 style="font-weight:bold;">*ご入力したユーザネームまたパスワードは有効ではありません。*</h4>
<a href="mem_signup1.php">新規会員登録はこちら</a>
<br>
ユーザネーム<br>
<input name="myusername" type="text" id="myusername"><br>
パスワード<br>
<input name="mypassword" type="password" id="mypassword"><br>

<input type="checkbox" name="cookie_check" value="checked">ユーザ名とパスワードを記憶させる<br><br>
<input class="btn btn-success" type="submit" name="Submit" value="送信">
</form>


</div>


<footer>
2016 © Andie H. All rights reserved.
</footer>

</div>
</body>
</html>
