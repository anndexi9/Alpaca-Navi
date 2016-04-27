function getVote(vote) {
    checkLoginPoll();
    process_Poll(vote);
        event.preventDefault();
 
}

function checkLoginPoll(){	 
	    $.ajax({
                url: 'alpacaAjax.php',
                data: {'act':'checkLogin'},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    
                    if (data.login ==="N")
                     window.location.href = "mem_need_login.php";}
              ,
                 error:  function() {
                     errorMsg();}
	});}
	
	
function process_Poll(vote){	
$.ajax({
                url: 'mem_poll_process1.php',
                data: {'act':'process','vote':vote},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    var msg;
                    if (data.vote==-1)
                    msg = '<div><p style="color:blue;">*このアカウントはもう投票されました、'+
                    '一人につき投票権が一回のみです。*</p><br>'+
                    '<a href="alpacaTop.html">トップページに戻る</a></div>';
                     else msg = '<div><h3>投票完了</h3><br><br>'+
                    '<a href="alpacaTop.html">トップページに戻る</a></div>';
                    
                    
                    msg += '<div id="container" style="min-width: 300px; max-width: 1000px;'+
                    'height: 500px; margin: 0 auto"></div>';
                     $('#displayMain').html(msg);
                    displayChart(data.wh,data.tea,data.blk,data.mix);
                }
                ,
                 error:  function() {
                     errorMsg();}
	});}



function displayChart(wh,tea,blk,mix){
 $(function () { Highcharts.setOptions({colors: ["#5ab75c"]});
    $("#container").highcharts({
        chart: {type: "bar"},
        title: {text: "一番好きなアルパカの毛色はどれでしょうか？"},
        subtitle: {text: "会員投票結果"},
        xAxis: {categories: ["白", "茶", "黒", "ミックス"],title: {text: null}},
        yAxis: {min: 0,title: {text: "％",align: "high"},
        labels: {overflow: "justify"}},
        tooltip: {valueSuffix: "%"},
        plotOptions: {bar: {dataLabels: {enabled: true}}},
        legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "top",
        floating: true,
        borderWidth: 1,
        backgroundColor:
        ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF"),
            shadow: true},
        credits: {enabled: false},
        series: [{name: "%",
           data: [wh,tea,blk,mix] }] 
        
    });
 });
}

function errorMsg(){
    $('#displayMain').addClass('has-error'); // add the error class to show red input
                $('#displayMain').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); // add the actual error message under our input

}