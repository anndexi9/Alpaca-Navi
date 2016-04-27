            window.currentID=0;
          
          var app = angular.module('mapApp', []);
		  
         
		 app.controller('mapCtrl', function ($scope) {
			  
				$scope.spot = spotArr;
				$scope.state = stateArr;

$scope.initializeMap= function(){
              var mapOptions = {
                  zoom: 5,
                  center: new google.maps.LatLng(36,138),
			  mapTypeId: google.maps.MapTypeId.ROADMAP};

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);


              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (data){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(data.lat, data.lng),
                      title: data.spotName
                  });
                  marker.content = '<div class="infoWindowContent">' + data.spotName + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent("<div>" + data.spotName + "<br>" 
					+ data.address + "<br>" + "<a href='" + data.link + "'>リンク</a></div>");
                      infoWindow.open($scope.map, marker);
					  
					$scope.map.setZoom(13);
					$scope.map.setCenter(marker.position);
					$scope.selectedState=data.area;
					$scope.showList();
					window.currentID=data.id;
					$scope.showProfile();
					
                  });
              }; 
              
              for (i = 0; i < spotArr.length; i++){
                  createMarker(spotArr[i]);
              }

    //if the window is resized , keep the center unchanged
    google.maps.event.addDomListener(window, "resize", function() {
     var center = map.getCenter();
     google.maps.event.trigger(map, "resize");
     map.setCenter(center); 
    });
};

$scope.zoomSpot=function(){
    if(window.currentID>0){
        var spotCtr = new google.maps.LatLng(spotArr[window.currentID].lat, spotArr[window.currentID].lng);
				$scope.map.setCenter(spotCtr);
				$scope.map.setZoom(13);
				}
};
    
$scope.zoomState=function(){
			 $scope.showList();
		 for (i = 0; i < stateArr.length; i++){
			 
			 if ($scope.selectedState == stateArr[i].prefecture){
				 var stateCtr = new google.maps.LatLng(stateArr[i].lat, stateArr[i].lng);
				$scope.map.setCenter(stateCtr);
				$scope.map.setZoom(stateArr[i].zm);
			 }
		 }	
};
            
$scope.showList = function() {
				
			  var list="";
			  var a=spotArr[1].area;
			  
			  if (($scope.selectedState==="")||($scope.selectedState=="全日本")){
				list+='<br><ul class="nav nav-pills nav-stacked"><li class="state"><b>' + 
					spotArr[1].area + '</b></li>';
				for (i = 1; i < spotArr.length; i++){
                  
				if (a!=spotArr[i].area)
				{	a=spotArr[i].area;
					if (i>1) 
					list += '</ul><br><ul class="nav nav-pills nav-stacked"><li class="state"><b>' + 
					spotArr[i].area + '</b></li>';
				}
			    list += '<li><a href="javascript:updateID('+spotArr[i].id+')">' + spotArr[i].spotName + '<br>'+
				spotArr[i].address + '</a></li>' ;
				}
			  }
				else { list += '<br><ul class="nav nav-pills nav-stacked"><li class="state"><b>' + $scope.selectedState + '</b></li>';
				for(i = 0; i < spotArr.length; i++){
					if (spotArr[i].area == $scope.selectedState){
				list += '<li><a href="javascript:updateID('+spotArr[i].id+')">' + spotArr[i].spotName + '<br>'+
				spotArr[i].address + '</a></li>' ;
					}
				}}
				
				list += '</ul><br>';

				$('#disList').html(list);
		 };
		 
		 
$scope.showProfile =function (){
    if(pickedSpot())
	contentProfile();
};

$scope.showNews= function (){
    contentNews();
};

$scope.showCmt =function (){
    contentCmt();
};

$scope.showGallery=function (){
    contentGallery();
};

$scope.showLoc=function (){
    //alert("inside scope zoom");
    $scope.zoomSpot();
    contentLoc();
};
		 
		 });
		 
		 
function updateID(id) {
      window.currentID=id;
    //alert("window id"+window.currentID);
     $(this).addClass('active'); 
     contentProfile();
     outsideScopeZoomSpot();
	}
	
function pickedSpot() {
    if (window.currentID === 0) 
    {
    $("#displayDetail").html("<h1>スポットを選んでください</h1>");
    return false;
    }else return true;
}

	
function contentProfile() {
    if (pickedSpot()){
        var profile='<br><div class="table-responsive"><table class="table table-hover table-striped col-sm-12 col-md-8">'+
    '<tr><td class="success col-sm-3 col-md-2">スポット名</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].spotName+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">所在地</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].address+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">電話番号</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].tel+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">営業時間</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].time+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">アクセス</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].access+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">ホームページ</td><td class="col-sm-9 col-md-6">'+'<a href="'+spotArr[window.currentID].link+'" target="blank">'+spotArr[window.currentID].link+'</td></tr>'+
    '<tr><td class="success col-sm-3 col-md-2">概要</td><td class="col-sm-9 col-md-6">'+spotArr[window.currentID].profile+'</td></tr>'+
    '</table></div>';
     $("#displayDetail").html(profile);
    }
}

function contentNews(){
    if (pickedSpot(window.currentID))
	$("#displayDetail").html("<h1>最新情報の機能をお楽しみ</h1>");
}

function contentCmt(){
    if (pickedSpot(window.currentID))
	showThread();
}

function contentGallery(){
    if (pickedSpot(window.currentID))
	$("#displayDetail").html("<h1>ギャラリーの機能をお楽しみ</h1>");
}

function contentLoc(){
    pickedSpot(window.currentID);
}

function outsideScopeZoomSpot() {
    //alert("outside scope zoom");
    var scope = angular.element($("#aMap")).scope();
    scope.$apply(function(){
    scope.zoomSpot();
    });
}


function showThread() {

	     $.ajax({
                url: 'alpacaDB.php',
                data: {'act':'spot','sp_id':window.currentID},
                type: 'post',
                dataType: 'json',
                encode: true,
                success: function(data) {
                    if (data.length>0) threadDisplay(data);
                    else $('#displayDetail').html("<h3>このスポットをめぐる話題はまだありません、新しい話題を発表したいなら、掲示板にご移動ください。</h3>");
                }    
               ,
                error:  function() {
                    errorMsg();
           }
	     });
	}//end show thread
	
	function threadDisplay(data){ 
	  //alert("threadDisplay ok" +data[0].thread_id +" data length "+data.length);
	  var msg="<h4>新しい話題を発表したいなら、掲示板にご移動ください。</h4><br>";
    for(var i=0;i<data.length;i++){
            msg += "<div class='table-responsive'><table class='table table-hover table-striped'><tr>"+
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
               $('#displayDetail').html(msg);
	    
	}
               
function errorMsg(){
            $('#displayDetail').addClass('has-error'); 
            $('#displayDetail').append('<div class="help-block"><h1>データベースに接続に問題があるようです。</h1></div>'); 
	
}