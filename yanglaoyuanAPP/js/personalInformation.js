var lastpage = sessionStorage.getItem("personalInformation.html");
$(function(){
	//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oheight = oh - ob;
	$(".menu").css("height",oheight);
	
	
	
	
})