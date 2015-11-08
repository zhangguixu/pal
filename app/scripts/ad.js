/*
	处理页面广告
*/
$(document).ready(function(){
var t_img; //定时器
var isLoad=true; //控制变量	
isImgLoad(function(){
	
});
//判断图片是否加载完成
function isImgLoad(callback){
	$('img').each(function(){
		//找到为0的就将isLoad设为false
		if(this.height===0){
			isLoad=false;
			return false;
		}
	});
	//为true,没有发现为0的，加载完毕
	if(isLoad){
		clearTimeout(t_img); //清除定时器
		callback();
	}else{
		isLoad=true;
		t_img=setTimeout(function(){
			isImgLoad(callback);
		},500)
	}
}	
});

