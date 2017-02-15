$(function(){

	//点击其他区域隐藏
	　var myDiv = $("#add");//内容框
	$(function (){
		$("#add1").click(function (event) {
			$(myDiv).toggle();//调用显示DIV方法
			$(document).one("click", function () {//对document绑定一个影藏Div方法
				$(myDiv).hide();
			});
			event.stopPropagation();//阻止事件向上冒泡
		});
		$(myDiv).click(function (event) {
			event.stopPropagation();//阻止事件向上冒泡
		});
	});
			

	
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
	//添加关注
	$(".stats").click(function(){
		window.location.href = "addfacus.html";
		sessionStorage.setItem("addfacus.html","facus.html");
	})
})