<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="alpaca.css">
<script src="alpaca.js"></script>
<script src="mem_poll1.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

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
<h3>一番好きなアルパカの毛色はどれでしょうか？</h3><br><br>
<form>
白
<input type="radio" name="vote" value="0" onclick="getVote(this.value)">
<br>茶
<input type="radio" name="vote" value="1" onclick="getVote(this.value)">
<br>黒
<input type="radio" name="vote" value="2" onclick="getVote(this.value)">
<br>ミックス
<input type="radio" name="vote" value="3" onclick="getVote(this.value)">
</form>
</div>
<footer>
2016 © Andie H. All rights reserved.
</footer>
</body>
</html>