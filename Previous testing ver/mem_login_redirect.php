<!DOCTYPE html>

<html>
<head><meta charset="UTF-8"></head>
<body>
    <?php
if (isset($_COOKIE['cookiename']) && isset($_COOKIE['cookiepw']) === TRUE) {
    $myusername = $_COOKIE['cookiename'];
    $mypassword = $_COOKIE['cookiepw'];
} else {
    $myusername = '';
    $mypassword = '';
}
?>
<h2>ログインお願いいたします。</h2>

<form name = "loginform" action="mem_checklogin.php"  method="post">
<table width="600px">
<tr>
<td colspan="2" style="text-align:center;"><strong>ログイン</strong></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;"><a href="mem_signup1.php">新規会員登録はこちら</a></td>
</tr>
<tr>
<td width="300px" style="text-align:right; padding-right: 10px;">ユーザネーム</td>
<td width="300px"><input name="myusername" type="text" id="myusername"></td>
</tr>
<tr>
<td style="text-align:right; padding-right: 10px;">パスワード</td>
<td><input name="mypassword" type="password" id="mypassword"></td>
</tr>
<tr><td colspan="2" style="text-align:center;"><input type="checkbox" name="cookie_check" value="checked">ユーザ名とパスワードを記憶させる</td></tr>
<tr>

</tr>
<tr><td></td>
    <td><input type="submit" name="Submit" value="送信"></td></tr>
</table>
</form>
</body>
</html>
