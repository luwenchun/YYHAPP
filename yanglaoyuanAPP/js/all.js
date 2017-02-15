var lastpage = sessionStorage.getItem("all.html");
$(function(){
	//点击接待登记 跳转页面
	$("#reception").click(function(){
		window.location.href = "reception.html";
		sessionStorage.setItem("reception.html","all.html");
		
	});
	/**************************************************************/
	//点击探访登记 跳转页面
	$("#visiteRegistration").click(function(){
		window.location.href = "visiteRegistration.html";
		sessionStorage.setItem("visiteRegistration.html","all.html");
		
	});
	/**************************************************************/
	//点击入住申请 跳转页面
	$("#liveApply").click(function(){
		window.location.href = "liveApply.html";
		sessionStorage.setItem("liveApply.html","all.html");
		
	});
	/**************************************************************/
	//点击订房办理 跳转页面
	$("#reservationManage").click(function(){
		window.location.href = "reservationManage.html";
		sessionStorage.setItem("reservationManage.html","all.html");
		
	});
	/**************************************************************/
	//点击请假办理 跳转页面
	$("#vacateManage").click(function(){
		window.location.href = "vacateManage.html";
		sessionStorage.setItem("vacateManage.html","all.html");
		
	});
	/**************************************************************/
	//点击生活护理 跳转页面
	$("#lifeNursing").click(function(){
		window.location.href = "lifeNursing.html";
		sessionStorage.setItem("lifeNursing.html","all.html");
		
	});
	/**************************************************************/
	//点击体征测量 跳转页面
	$("#SignsTomeasure").click(function(){
		window.location.href = "SignsTomeasure.html";
		sessionStorage.setItem("SignsTomeasure.html","all.html");
		
	});
	/**************************************************************/
	//点击服药护理 跳转页面
	$("#surveyRecord").click(function(){
		window.location.href = "surveyRecord.html";
		sessionStorage.setItem("surveyRecord.html","all.html");
		
	});
})
