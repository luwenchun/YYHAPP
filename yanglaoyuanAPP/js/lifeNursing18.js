var lastpage = sessionStorage.getItem("lifeNursing18.html");
$(function (){
	//跳转至护理记录
	$("#nursingRecord").click(function(){
		window.location.href = "nursingRecord.html";
		sessionStorage.setItem("nursingRecord.html","lifeNursing18.html");
	});
})
