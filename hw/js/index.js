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
});