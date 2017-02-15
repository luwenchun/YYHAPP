var lastpage = sessionStorage.getItem("SignsTomeasureinfor.html");
var lastpage = sessionStorage.getItem("bedsInformation.html");
$(function(){
	//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oheight = oh - ob;
	$(".bedslist").css({"height":oheight,"background":"#efeff4"});
	
	/**************************************************************/
	//床位详情
	$(".bedslist1rightli1,.bedslist1rightli2").click(function(){
		window.location.href = "bedsDetails.html";
		sessionStorage.setItem("bedsDetails.html","bedsInformation.html");
	})
})