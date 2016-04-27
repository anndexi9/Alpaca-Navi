$(document).ready(function() {
    var current_page = 1;
var records_per_page = 20;


var objJson = showThread();
alert(objJson);
changePage(1);
});



function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementsByClassName("btn_next");
    var btn_prev = document.getElementsByClassName("btn_prev");
    var displayPageIndex = document.getElementById("displayPageIndex");
    var page_span = document.getElementsByIdName("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    displayPageIndex.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        displayPageIndex.innerHTML += objJson[i] + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}
/*
window.onload = function() {
  
    
};*/

function showThread() {

	     $.ajax({
                url: 'alpacaThread.php',
                data: {'act':'show'},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    
                threadArr = threadDisplayArray(data);
                return threadArr;
                }    
               ,
                error:  function() {
                    errorMsg();
           }
	     });
	}//end show thread

function threadDisplayArray(data){ 
    alert("Arr ok data length=" + data.length);
    
  var threadArr=[];
	  
                    for(i=0;i<data.length;i++){
                    threadArr[i]= "<table class='table table-striped'><tr><td class='bg-success'>ID</td><td>"
                    + data[i]['thread_id']+"</td>"+
    "<td class='bg-success'>発信者</td><td>"+data[i]['author']+ "</td>"+
    "<td class='bg-success'>発表時間</td><td>"+data[i]['timestamp']+ "</td></tr>"+ 
    "<tr><td class='bg-success'>カテゴリ</td><td>"+data[i]['category']+"</td>"+
    "<td class='bg-success'>サブカテゴリ</td><td colspan='3'>"+data[i]['subcat']+"</td></tr>"+
    "<tr><td class='bg-success'>タイトル</td><td colspan='5'>"+data[i]['title']+ "</td></tr>"+
    "<tr><td class='bg-success'>内容</td><td colspan='5'>"+data[i]['comment']+"</td></tr></table><br>";
                    }
                    
            return threadArr;
               //$("#displayPageIndex").html(msg);
	    
	}
       