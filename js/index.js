
var s = skrollr.init();

$(document).ready(function() {
	$(".totop").click(function(event) {
			$("html,body").animate({scrollTop : 0}, 300);
	});

});

$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").removeClass("navbar-top");
  }else{
    $(".navbar").addClass("navbar-top");
  }
});

