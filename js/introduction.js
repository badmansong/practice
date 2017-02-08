$(".linebox").hover(
  function(){
    $(".box1").css("background-color","#222");
    $(".box2").css("background-color","#222");
  }
);

setInterval(
  function(){
    var now= new Date();
$("#clock").text("現在時間"+now.getHours()+"點"+now.getMinutes()+"分"+now.getSeconds()+"秒");}
,1000)