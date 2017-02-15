var lastpage = sessionStorage.getItem("SignsTomeasureinfor.html");
$(function(){
	//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oheight = oh - ob;
	$(".infor").css({"height":oheight,"background":"#efeff4"});
	
	/**************************************************************/
	//跳转至测量列表
	$("#measuringRecord").click(function(){
		window.location.href = "measuringRecord.html";
		sessionStorage.setItem("measuringRecord.html","SignsTomeasureinfor.html");
	})
})