var lastpage = sessionStorage.getItem("lifeNursing.html");
$(function(){
//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oheight = oh - ob;
	$(".infor").css({"height":oheight,"background":"#efeff4"});
	
	/**************************************************************/
	//点击跳转至详情
	$(".serchli").click(function(){
		window.location.href = "lifeNursing18.html";
		sessionStorage.setItem("lifeNursing18.html","lifeNursing.html");
	});
	//跳转至护理记录
	$("#nursingRecord").click(function(){
		window.location.href = "nursingRecord.html";
		sessionStorage.setItem("nursingRecord.html","lifeNursing.html");
	});
})