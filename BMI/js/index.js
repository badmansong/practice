$(function(){
	// BMI計算開始
	var bmi
		var Class =''
	$('#end').on('click',function(){
		var H = $('#H').val()/100
		var W = $('#W').val()
		var Cal = W/(H*H)
		bmi = Cal.toFixed(1)
		if(H=='' || W==''){
			alert('請輸入正確數字')
		}else{

		if(18.5<=bmi && bmi<23.9){
			$('body').addClass('m');
			$('.result').css({border:'6px solid #86D73E',color:'#86D73E'})
			$('.result a').css({backgroundColor:'#86D73E'})
			$('#info').css({color:'#86D73E'}).html('適中')
			Class = 'md'
		}else if(bmi<18.5){
			$('body').addClass('m');
			$('.result').css({border:'6px solid #31BAF9',color:'#31BAF9'})
			$('.result a').css({backgroundColor:'#31BAF9'})
			$('#info').css({color:'#31BAF9'}).html('過輕')
			Class= 'light'
		}else{
			$('body').addClass('m');
			$('.result').css({border:'6px solid #FF1200',color:'#FF1200'})
			$('.result a').css({backgroundColor:'#FF1200'})
			$('#info').css({color:'#FF1200'}).html('過重')
			Class = 'heavy'
		}
		$(this).text(bmi)
		$('#save').css('display','block')
		// $(this).off('click')
		}
	})
	$('.result a').on('click',function(){
		$('#H').val("")
		$('#W').val("")
		$('.result').css({border:'',color:''})
		$('#save').css({display:'none'})
		$('body').removeClass('m')
		$('#end').text('看結果')
		
	})
	// BMI計算結束
	// 紀錄表開始
	var data = JSON.parse(localStorage.getItem('listData')) || []

	function addData(){
		var getDate =new Date().getMonth()+1+"-"+ new Date().getDate() +"-"+new Date().getFullYear()
		var todo = {
			class: Class,
			status: $('#info').html(),
			BMI: bmi,
			weight: $('#W').val(),
			height: $('#H').val(),
			data: getDate
		}
		data.push(todo);
		updateList(data)
		localStorage.setItem('listData',JSON.stringify(data))
		$('.result a').triggerHandler('click')
	}
	function updateList(items){
		var str='';
		$.each(items,function(index,val){
			// str += '<li>'+val.status+val.BMI+val.weight+val.height+val.data+'<button class="del" data-index='+index+'>刪除</button></li>'
			str += '<ul class="list"><li class="'+val.class+'">'+val.status+'</li><li><span>BMI</span>'+val.BMI+'</li><li><span>height</span>'+val.height+'</li><li><span>weight</span>'+val.weight+'</li><li><span>'+val.data+'</span></li><button class="del" data-index='+index+'>刪除</button></ul>'
		})
		$('.listBox').html(str)
	}
	function delList(){
		var index = $(this).data('index')
		data.splice(index,1);
		localStorage.setItem('listData',JSON.stringify(data))
		updateList(data);
	}
	$('#save').on('click',addData)
	$('.listBox').on('click','.del',delList)
	$(window).on('load',updateList(data))
	// 紀錄表結束
})