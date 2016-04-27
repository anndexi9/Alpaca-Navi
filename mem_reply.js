$(document).ready(function() {
    
   showThread();
   
   $('#replyThread').submit(function(event) {
	    
	   if (validateReply()){
	       replyThread();
	       setTimeout(function() { location.reload(); }, 1500);
	   }
		event.preventDefault();
	});
});


function validateReply() {
	    
	    if  ($('#msg-group').hasClass('has-error'))
           { $('#msg-group').removeClass('has-error');
             $('.help-block').remove();}
          
        if ( $('#msg').val()==="" ){
        $('#msg-group').addClass('has-error'); 
        $('#msg-group').append('<div class="help-block">返信内容を入力してください。</div>'); }
        
         else if ($('#msg').val()!=="")
        return true;
	else return false;
	}//end validate
	
function showThread() {

	     $.ajax({
                url: 'mem_reply_process.php',
                data: {'act':'show',
                     'thr': $('input[name="thr"]').val()
                },
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                //alert("show ok" +$('input[name="thr"]').val()+ " data "+ data);
                threadDisplay(data);
                }    
               ,
                error:  function(data) {
                    alert("show error "+ $('input[name="thr"]').val() + " data "+ data);
                    //errorMsg();
           }
	     });
	}//end show thread
	
function replyThread() {
        
	     var formData = {
	         'act':'reply',
	         'thr': $('input[name="thr"]').val(),
            'msg' : $('#msg').val()        }
        
   $.ajax({
                url: 'mem_reply_process.php',
                data: formData,
                type: 'post',
                //dataType: 'json',
                encode: true,
               success: function(data) {
                   $('form').append('<div class="alert alert-success">返信成功！</div>');
                },
                error:  function() {
                errorMsg();
	}
	    
	});
                
	}//end replyThread     
	
function threadDisplay(data){ 
	  
       var   msg = "<table class='table table-hover table-striped'><tr>" +
    "<td class='success'>スレッド＃</td><td>"+ data.thread_id+"</td>" +
    "<td class='success'>発信者</td><td>"+data.author+ "</td>"+
    "<td class='success'>発表時間</td><td>"+data.timestamp+ "</td></tr>"+ 
    "<tr><td class='success'>カテゴリ</td><td>"+data.category +"</td>"+
    "<td class='success'>サブカテゴリ</td><td colspan='3'>"+data.subcat+"</td></tr>"+
    "<tr><td class='success'>タイトル</td><td colspan='4'>"+data.title+ "</td>"+
    "<td class='success'>返信数"+data.reply+"</td></tr>"+
    "<tr><td colspan='6'>"+data.comment+"</td></tr></table>";
    
    if (data.replyArr.length>0)
    {
        for(var j=0;j<data.replyArr.length;j++){
        msg += "<table class='table table-striped'><tr>" +
    "<td class='bg-success'>返信＃</td><td>"+ data.replyArr[j].ans_id+"</td>" +
    "<td class='bg-success'>返信者</td><td>"+data.replyArr[j].author+ "</td>"+
    "<td class='bg-success'>返信時間</td><td>"+data.replyArr[j].timestamp+ "</td></tr>"+ 
    "<tr><td colspan='3'>"+data.replyArr[j].comment+"</td></tr></table>";}
    }    
               $('#displayThread').html(msg);
	}
               
function errorMsg(){
            $('#displayThread').addClass('has-error'); 
            $('#displayThread').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); 
	
}
