$(function(){
	//从底部上升的遮罩效果开始
	$(".con2").hover(function(){
		$(this).find(".txt2").stop().animate({height:"120px"},200);
		$(this).find(".txt2 h3").stop().animate({paddingTop:"35px"},200);
	},function(){
		$(this).find(".txt2").stop().animate({height:"45px"},200);
		$(this).find(".txt2 h3").stop().animate({paddingTop:"0px"},200);
	})
	//从底部上升的遮罩效果结束
});
