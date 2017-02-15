var lastpage = sessionStorage.getItem("bedsDetails.html");
$(function(){
	//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oheight = oh - ob;
	$(".infor").css({"height":oheight,"background":"#f0eff5"});
	
	/**************************************************************/
	
})