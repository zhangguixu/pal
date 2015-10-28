/*
	处理页面广告
*/
$(document).ready(function(){
	setTimeout(function(){
	$(".mask").removeClass("tmp-hide").addClass("fadeIn").addClass("animated");
		setTimeout(function(){
			$("#slogan-1").removeClass("tmp-hide").addClass("rollIn").addClass("animated");
			setTimeout(function(){
				$("#slogan-2").removeClass("tmp-hide").addClass("rollIn").addClass("animated");
				setTimeout(function(){
					$("#slogan-3").removeClass("tmp-hide").addClass("rollIn").addClass("animated");
					setTimeout(function(){
						$(".slogan-detail").removeClass("tmp-hide").addClass("lightSpeedIn").addClass("animated");
						setTimeout(function(){
							$(".mask").removeClass("fadeIn").addClass("rollOut");
						},5000)
					},2000)
				},2000)
			},2000)
		},2000)
	 },1000);
});



