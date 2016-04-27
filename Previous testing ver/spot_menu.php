<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>
<h3>アルパカとあえる場所</h3>
<form method="post">
<select name="area" onchange="this.form.submit()">
  <option value="">エリアを選んでください</option>
  <option value="北海道">北海道</option>
  <option value="岩手県">岩手県</option>
  <option value="福島県">福島県</option>
  <option value="新潟県">新潟県</option>
  <option value="群馬県">群馬県</option>
  <option value="栃木県">栃木県</option>
  <option value="長野県">長野県</option>
  <option value="埼玉県">埼玉県</option>
  <option value="千葉県">千葉県</option>
  <option value="神奈川県">神奈川県</option>
  <option value="岐阜県">岐阜県</option>
  <option value="滋賀県">滋賀県</option>
    <option value="兵庫県">兵庫県</option>
    <option value="大阪府">大阪府</option>
    <option value="和歌山県">和歌山県</option>
    <option value="鳥取県">鳥取県</option>
    <option value="岡山県">岡山県</option>
    <option value="熊本県">熊本県</option>
    <option value="長崎県">長崎県</option>
  </select>
</form>
<br>
<div id="spotDisplay">
<?php
if (isset($_POST['area']) === TRUE) {
$q = htmlspecialchars($_POST['area'], ENT_QUOTES, 'UTF-8');

$con = mysqli_connect('localhost','codecamp7611','EQNBXEWO','codecamp7611');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
mysqli_set_charset($con,'utf8');

$sql="SELECT spot_name, address, link FROM alpaca_spot WHERE area = '".$q."'";

$result = mysqli_query($con,$sql);
echo "<table>
<tr>
<th>スポット in ".$q."</th>
<th>住所</th>
<th>リンク</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['spot_name'] . "</td>";
    echo "<td>" . $row['address'] . "</td>";
    echo '<td><a href="' . $row['link'] . '" target="_blank">リンク</a></td>';
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
}
?>
</div>

</body>
</html>