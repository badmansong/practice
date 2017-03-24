
var s = skrollr.init();

$(document).ready(function() {
	//置頂按鈕
	$(".totop").click(function(event) {
	$("html,body").animate({scrollTop : 0}, 300);
	});

	//滾動目標
	$("a.move").on("click",function(){
		var getHref = $(this).attr("href");
		
		var getHrefTop = $(getHref).offset().top;
		console.log(getHrefTop);
		$("body").animate({scrollTop:getHrefTop},300);
		return false;

	})
	$(window).on("scroll" , function(){
		var scroll = $(window).scrollTop();

		if(scroll>300){
			$(".totop").fadeIn();
		}else{
			$(".totop").fadeOut();
		}
		// console.log(scroll)


	})
});
