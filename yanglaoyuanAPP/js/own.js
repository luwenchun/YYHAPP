$(function(){
	//获取屏幕高度 控制页面最后部分
	var oh = $(window).height();
	var ob = $(".top").height();
	var oc = $(".mind").height();
	var od = $(".footer").height();
	var oheight = oh - ob - oc - od;
	$(".other").css("height",oheight);
	
	
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
	//跳转个人信息
	$(".topleft .left").click(function(){
		window.location.href = "personalInformation.html";
		sessionStorage.setItem("personalInformation.html","own.html");
	})
})