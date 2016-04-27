window.eligible=false;
$(document).ready(function() {
    
   $('#signupform').submit(function(event) {
	    
	   if (validateRegInfo()) 
	   checkUserDB();
	   if (window.eligible===true)
	   addRegInfo2DB();
	       
		event.preventDefault();
	});
});

function clearRegMsg(){
     if  ($('#name-gp').hasClass('has-error'))
            $('#name-gp').removeClass('has-error');
        if  ($('#pw1-gp').hasClass('has-error'))
            $('#pw1-gp').removeClass('has-error');
        if  ($('#pw2-gp').hasClass('has-error'))
            $('#pw2-gp').removeClass('has-error');
        if  ($('#email-gp').hasClass('has-error'))
            $('#email-gp').removeClass('has-error');
        
        $('.help-block').remove();
}

function validateRegInfo() {
    
	   clearRegMsg();
        
        var criterion=/^[a-zA-Z0-9]*$/;
        var mailCriterion= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          
        if ( $("input[id$='uname']").val()==="" ){
        $('#name-gp').addClass('has-error'); 
        $('#name-gp').append('<div class="help-block">ユーザネームを入力してください。</div>'); }
        else{ if ((($("input[id$='uname']").val().length<6)||$("input[id$='uname']").val().length>12)){
        $('#name-gp').addClass('has-error'); 
        $('#name-gp').append('<div class="help-block">ユーザネームの長さは6-12文字でお願いします。</div>'); }
        if (!criterion.test($("input[id$='uname']").val())){
        $('#name-gp').addClass('has-error'); 
        $('#name-gp').append('<div class="help-block">ユーザネームはアルファベットと数字のみでお願いします。</div>'); }}
        
        if ( $("input[id$='pw1']").val()==="" ){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">パスワードを入力してください。</div>'); }
        else{if ((($("input[id$='pw1']").val().length<6)||$("input[id$='pw1']").val().length>10)){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">パスワードの長さは6-10文字でお願いします。</div>'); }
        if (!criterion.test($("input[id$='pw1']").val())){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">パスワードはアルファベットと数字のみでお願いします。</div>'); }}
        
        
        if ( $("input[id$='pw2']").val()==="" ){
        $('#pw2-gp').addClass('has-error'); 
        $('#pw2-gp').append('<div class="help-block">パスワードを入力してください。</div>'); }
        else {if ((($("input[id$='pw2']").val().length<6)||$("input[id$='pw2']").val().length>10)){
        $('#pw2-gp').addClass('has-error'); 
        $('#pw2-gp').append('<div class="help-block">パスワードの長さは6-10文字でお願いします。</div>'); }
        if (!criterion.test($("input[id$='pw2']").val())){
        $('#pw2-gp').addClass('has-error'); 
        $('#pw2-gp').append('<div class="help-block">パスワードはアルファベットと数字のみでお願いします。</div>'); }}
        
        if (!$("input[id$='pw2']").val().match($("input[id$='pw1']").val())){
        $('#pw1-gp').addClass('has-error'); 
        $('#pw2-gp').addClass('has-error'); 
        $('#pw1-gp').append('<div class="help-block">入力されたパスワードが一致していません。</div>'); 
        $('#pw2-gp').append('<div class="help-block">入力されたパスワードが一致していません。</div>'); }
        
        if ($("input[id$='email']").val()===""){
        $('#email-gp').addClass('has-error'); 
        $('#email-gp').append('<div class="help-block">メールを入力してください。</div>'); 
            
        }
        else if (!mailCriterion.test($("input[id$='email']").val())){
            alert("function");
        $('#email-gp').addClass('has-error'); 
        $('#email-gp').append('<div class="help-block">入力されたメールが有効ではありません。</div>'); }
       
       if  ($('#name-gp').hasClass('has-error')||$('#pw1-gp').hasClass('has-error')
            ||$('#pw2-gp').hasClass('has-error')||$('#email-gp').hasClass('has-error'))
        {return false;}
	else { return true;}}//end validate

function checkUserDB(){
    $.ajax({
                url: 'mem_signup.php',
                data: {'act':'check',
                    'uname': $("input[id$='uname']").val(),
                    'pw': $("input[id$='pw1']").val(),
                    'email': $("input[id$='email']").val()
                },
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                //alert("reg success");
                if (data=="Y"){
                $('form').addClass('has-error'); 
                $('form').append('<div class="help-block">ご入力したユーザネームまたメールアドレスはすでに登録されました、'+
                '別のユーザネームまたメールアドレスでお願いします。</div>');
                window.eligible=false;}else window.eligible=true;    
               },
                error:  function(data) {
                errorMsg();
           }
	     });

}
	
	
function addRegInfo2DB() {

	     $.ajax({
                url: 'mem_signup.php',
                data: {'act':'reg',
                    'uname': $("input[id$='uname']").val(),
                    'pw': $("input[id$='pw1']").val(),
                    'email': $("input[id$='email']").val()
                },
                type: 'post',
               // dataType: 'json',
                encode: true,
                success: function() {
                //alert("reg success");
                $('form').append('<div class="alert alert-success">会員登録成功！</div>');
                setTimeout(function() { location.href="alpacaTop.html"; }, 2000);
                }    
               ,
                error:  function() {
                errorMsg();
           }
	     });
	}//end add reg info to DB
	
function errorMsg(){
            $('form').addClass('has-error'); 
            $('form').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); 
	
}
