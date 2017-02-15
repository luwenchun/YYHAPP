var lastpage = sessionStorage.getItem("surveyRecord.html");
$(function(){
	//点击客户信息 跳转到服药详情
	$(".serchli").click(function(){
		window.location.href = "doseNursing.html";
		sessionStorage.setItem("doseNursing.html","surveyRecord.html");
	});
	//跳转到服药记录
	$("#medicineRecord").click(function(){
		window.location.href = "medicineRecord.html";
		sessionStorage.setItem("medicineRecord.html","surveyRecord.html");
	});
})
