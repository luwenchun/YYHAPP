var lastpage = sessionStorage.getItem("doseNursing.html");
$(function(){
	$("#medicineRecord").click(function(){
		window.location.href = "medicineRecord.html";
		sessionStorage.setItem("medicineRecord.html","doseNursing.html");
	})
})
