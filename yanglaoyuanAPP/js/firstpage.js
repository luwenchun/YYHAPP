$(function(){
	//点击全部
	$("#all").click(function(){
		window.location.href = "all.html";
		sessionStorage.setItem("all.html","firstpage.html");
		
	});
	/**********************************/
	//点击接待登记
	$("#reception").click(function(){
		window.location.href = "reception.html";
		sessionStorage.setItem("reception.html","firstpage.html");
		
	});
	/**********************************/
	//点击探访登记
	$("#visiteRegistration").click(function(){
		window.location.href = "visiteRegistration.html";
		sessionStorage.setItem("visiteRegistration.html","firstpage.html");	
	});	
	/**********************************/
	//点击生活护理
	$("#lifeNursing").click(function(){
		window.location.href = "lifeNursing.html";
		sessionStorage.setItem("lifeNursing.html","firstpage.html");	
	});
	/**********************************/
	//点击体征检测
	$("#SignsTomeasure").click(function(){
		window.location.href = "SignsTomeasure.html";
		sessionStorage.setItem("SignsTomeasure.html","firstpage.html");	
	});
	/**********************************/
	//点击服药护理
	$("#surveyRecord").click(function(){
		window.location.href = "surveyRecord.html";
		sessionStorage.setItem("surveyRecord.html","firstpage.html");	
	});
	/**********************************/
	//点击菜单栏切换
	$(".footerlist").click(function(){
		var i = $(this).attr("status");		
		$(".footerlist").find(".imghide").hide();
		$(".footerlist").find(".imgshow").show();
		$(".footerlist").find(".footertest").removeClass("active");
		if(i == 0){			
				$(this).find(".imghide").show();
				$(this).find(".imgshow").hide();
				$(this).find(".footertest").addClass("active");
				window.location.href = "firstpage.html";
		}if(i == 1){			
				$(this).find(".imghide").show();
				$(this).find(".imgshow").hide();
				$(this).find(".footertest").addClass("active");
				window.location.href = "facus.html";
		}if(i == 2){			
				$(this).find(".imghide").show();
				$(this).find(".imgshow").hide();
				$(this).find(".footertest").addClass("active");
				window.location.href = "roomStatus.html";
		}if(i == 3){			
				$(this).find(".imghide").show();
				$(this).find(".imgshow").hide();
				$(this).find(".footertest").addClass("active");
				window.location.href = "own.html";
		}else{
			
		}
		
		
	});
	
})
