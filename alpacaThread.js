$(document).ready(function() {
    
   showThread();
   
  $('#addThread').submit(function(event) {
       
	    checkLogin();
	    
	   
	   if (validateThread()){
	       addThread();
	       setTimeout(function() { location.reload(); }, 1500);
	   }
	
		event.preventDefault();
	});
});

function checkLogin(){
  $.ajax({
                url: 'alpacaThread.php',
                data: {'act':'checkLogin'},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    if (data.login=="N") 
                    window.location = "mem_need_login.php";
                }
               ,
                error:  function() {
               errorMsg();
               	}
	    
	});
	  }//end checkLogin

function validateThread() {
	    if  ($('#title-group'),$('#msg-group').hasClass('has-error'))
           { $('#title-group'),$('#msg-group').removeClass('has-error');
             
             $('.help-block').remove(":contains('タイトルを入力してください。')" );
             $('.help-block').remove(":contains('内容を入力してください。')" );
           }
             
            if (($('input[name="title"]').val())==="") {

                $('#title-group').addClass('has-error'); // add the error class to show red input
                $('#title-group').append('<div class="help-block">タイトルを入力してください。</div>'); // add the actual error message under our input
            }
       
             if ( $('#msg').val()==="" ){
                
                $('#msg-group').addClass('has-error'); // add the error class to show red input
                $('#msg-group').append('<div class="help-block">内容を入力してください。</div>'); // add the actual error message under our input
            }

         if (($('input[name="title"]').val()!=="") &&(($('#msg').val()!=="")))
        { 
            return true;}
	else return false;
	
	}
	
	function showThread() {

	     $.ajax({
                url: 'alpacaThread.php',
                data: {'act':'show'},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                threadDisplay(data);
                }    
               ,
                error:  function() {
                    errorMsg();
           }
	     });
	}//end show thread
	function addThread() {
        
	     var formData = {
	         'act':'add',
            'category' : $('#category option:selected').text(),
            'sub_cat' : $('#sub_cat option:selected').text(),
            'sub_cat1' : $('#sub_cat option:selected').val(),
            'title' : $('input[name="title"]').val(),
            'msg' : $('#msg').val()
        };
        
   $.ajax({
                url: 'alpacaThread.php',
                data: formData,
                type: 'post',
                //dataType: 'json',
                encode: true,
               success: function(data) {
                   $('form').append('<div class="alert alert-success">投稿成功！</div>');
                },
                error:  function() {
                errorMsg();
	}
	    
	});
                
	}//end addThread     
	
function threadDisplay(data){ 
	  //alert("threadDisplay ok" +data[0].thread_id +" data length "+data.length);
	  var msg = '';
//	  alert("aaa;"+msg);
    for(var i=0;i<data.length;i++){
            msg += "<div class='table-responsive col-sm-12 col-md-12'><table class='table table-hover table-striped'><tr>"+
    "<td class='success'>スレッド＃</td><td>"+ data[i].thread_id+"</td>" +
    "<td class='success'>発信者</td><td>"+data[i].author+ "</td>"+
    "<td class='success'>発表時間</td><td>"+data[i].timestamp+ "</td></tr>"+ 
    "<tr><td class='success'>カテゴリ</td><td>"+data[i].category +"</td>"+
    "<td class='success'>サブカテゴリ</td><td colspan='3'>"+data[i].subcat+"</td></tr>"+
    "<tr><td class='success'>タイトル</td><td colspan='4'>"+data[i].title+ "</td>"+
    "<td class='success'>返信数: "+data[i].reply+"</td></tr>"+
    "<tr><td colspan='6'>"+data[i].comment+"</td></tr>"+
   
    "<tr><td colspan ='6' style='align-content:center;'><a class='btn btn-success'  href='mem_reply2.php?thr="+data[i].thread_id+
    "'>スレッド＃"+data[i].thread_id+"に返信 or 返信を見る</a></td></tr></table></div>";

    +"<br><br>";
    }
               $('#displayThread').html(msg);
	    
	}
               
function errorMsg(){
            $('#displayThread').addClass('has-error'); 
            $('#displayThread').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); 
	
}
/*
$(document).on("click", "button.reply", function(){
    alert("click works");
    reply($(this).attr('id'));
    $('div[id*='+'$(this).attr("id")'+']').append("<form id ='addReply"+$(this).attr('id')+"' method='POST'>"+
   "<button class='reply1' id='"+$(this).attr('id')+"'>reply1</button>"
    + "</form>");
});

$(document).on("click", "button.reply1", function(){
    alert("reply 1 also works");
    
});

function reply(str){
    alert("yay" + str);
}*/