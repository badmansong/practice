
var s = skrollr.init();

$(document).ready(function() {
	//置頂按鈕
	$(window).on('scroll',function(){
	if($(window).scrollTop()>100){
	$('.totop').fadeIn();
	}else{
		$('.totop').fadeOut();
	}
		
	})
	$(".totop").click(function() {
	$("html,body").animate({scrollTop : 0}, 300);
	});
	//緩移到目標
	$('.TAG').on('click',function(){
	var target = $(this).attr('href')
		$('html,body').animate({scrollTop:$(target).offset().top})
		return false;
	})

	$('a[data-info]').on('mouseover',function(e){
		$('body').append('<div class="dataInfo">'+$(this).data('info')+'</div>')
		$('.dataInfo').css({top:e.pageY+10+'px',left:e.pageX +10+'px'})
	}).on('mousemove',function(e){
		$('.dataInfo').css({top:e.pageY+10+'px',left:e.pageX +10+'px'})
	}).on('mouseleave',function(){
		$('.dataInfo').remove()
	})
	
});
