
var s = skrollr.init();

$(document).ready(function() {
	//置頂按鈕
	$(".totop").click(function(event) {
	$("html,body").animate({scrollTop : 0}, 300);
	});

});
