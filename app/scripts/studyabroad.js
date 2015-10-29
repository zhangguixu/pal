/*
	处理页面广告
*/
$(document).ready(function(){
		//做一下自适应
		if($(window).width()>1000){
			if($(window).width()<1200){
				$(".slogan").css("paddingTop","20px");
				$(".slogan p").css("fontSize","15px");
			}
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
			setTimeout(function(){
				$(".mask").width(1).height(1);
				$(".slogan").width(1).height(1).css("overflow","hidden");
			},16000);
		}
});



