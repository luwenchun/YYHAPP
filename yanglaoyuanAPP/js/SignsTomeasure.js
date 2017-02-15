var lastpage = sessionStorage.getItem("SignsTomeasure.html");
$(function(){
	//跳转至测量详情
	$("body").on("click",".serchli",function(){
		sessionStorage.setItem("SignsTomeasureinfor.html","SignsTomeasure.html");
		window.location.href = "SignsTomeasureinfor.html";
	});
	//跳转至测量列表
	$("#measuringRecord").click(function(){
		window.location.href = "measuringRecord.html";
		sessionStorage.setItem("measuringRecord.html","SignsTomeasure.html");
	});
})