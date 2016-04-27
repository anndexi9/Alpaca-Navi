$(document).ready(function() {
    
    checkLoginInf();
 
});

function checkLoginInf() {
  $.ajax({
                url: 'alpacaAjax.php',
                data: {'act':'checkLogin'},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    
                    if (data.login=="Y") $('#loginLink').append('<a href="mem_logout.php">ログアウト</a>');
                    else $('#loginLink').append('<a href="mem_login.php">ログイン</a>');
                  
                }
               ,
                error:  function() {
                $('#displayMain').addClass('has-error'); // add the error class to show red input
                $('#displayMain').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); // add the actual error message under our input
	}
	    
	});
}