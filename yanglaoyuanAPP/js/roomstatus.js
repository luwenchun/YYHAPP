$(function(){
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
		}
	});	
	//查询
	$(".complete").click(function(){
		window.location.href = "bedsInformation.html";
		sessionStorage.setItem("bedsInformation.html","roomstatus.html");
	})
})