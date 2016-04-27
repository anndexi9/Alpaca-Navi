window.login=false;
$(document).ready(function() {
    
   $('#loginForm').submit(function(event) {
	    
	   if (validateLoginInfo()) 
	   
	   checkLoginInfo();
	   if (window.login===true)
	   location.href="mem_login_success.php";
	
		event.preventDefault();
	});
});

function clearLoginMsg(){
     if  ($('#name-gp').hasClass('has-error'))
            $('#name-gp').removeClass('has-error');
    if  ($('#pw1-gp').hasClass('has-error'))
            $('#pw1-gp').removeClass('has-error');
        $('.help-block').remove();
}

function validateLoginInfo() {
    
	   clearLoginMsg();
        
        var criterion=/^[a-zA-Z0-9]*$/;
         
        if ( $("input[id$='uname']").val()==="" ){
        $('#name-gp').addClass('has-error'); 
        $('#name-gp').append('<div class="help-block">ユーザネームを入力してください。</div>'); }
        else if (((($("input[id$='uname']").val().length<6)||
        ($("input[id$='uname']").val().length>12))|| (!criterion.test($("input[id$='uname']").val())))){
        $('#name-gp').addClass('has-error'); 
        $('#name-gp').append('<div class="help-block">入力されたユーザネームが有効ではありません。</div>'); }
        
        if ( $("input[id$='pw1']").val()==="" ){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">パスワードを入力してください。</div>'); }
        else if ((($("input[id$='pw1']").val().length<6)||
        ($("input[id$='pw1']").val().length>10)||(!criterion.test($("input[id$='pw1']").val())))){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">入力されたパスワードは有効ではありません。</div>'); }
        
       if  ($('#name-gp').hasClass('has-error')||$('#pw1-gp').hasClass('has-error'))
        return false;
	else  return true;
}//end validate
	
	
	function checkLoginInfo(){
    $.ajax({
                url: 'mem_checklogin.php',
                data: {'act':'check',
                    'uname': $("input[id$='uname']").val(),
                    'pw': $("input[id$='pw1']").val()
                },
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                //alert("reg success");
                if (data=="N"){
                $('form').addClass('has-error'); 
                $('form').append('<div class="help-block">入力されたユーザネームまたパスワードは間違っています。</div>');
                window.login=false;}else window.login=true;    
               },
                error:  function(data) {
                errorMsg();
           }
	     });

}
