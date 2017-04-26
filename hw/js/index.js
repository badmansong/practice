$(document).ready(function() {
	$("a.to").click(function(){
		var gethref = $(this).attr("href");
		$("html,body").animate({scrollTop:$(gethref).offset().top},600);
		return false;
	}); 

	$(".hamburger-menu").click(function() {
		$("body").toggleClass("menu_show");
	});

	$("span.love").on("click",function(){
		$(this).toggleClass("on_love");
	});
	function googleMap(){
		var myLocal = {lat: 22.727311,lng: 120.256965 }
		var mapOption = {
			center: myLocal,
			zoom: 16
		}
		var map = new google.maps.Map(document.getElementById('googleMap'),mapOption)
		var point = new google.maps.Marker({position:myLocal,map:map})
	}
	window.onload = googleMap;
});