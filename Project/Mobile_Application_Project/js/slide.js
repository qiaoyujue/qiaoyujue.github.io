$(function () {
	////////////////////////
	var $imgIndex = 0;
	var autoChange = setInterval(function () {
		var $imgI = $imgIndex % 7;
		imgShow("#imgchange", $imgI, "#circle");
        $imgIndex++;
	},2000);
	////////////////////////
	var $hwImgindex = 0;
	var autoChange_h = setInterval(function () {
		var $hi = $hwImgindex % 5;
		imgShow("#hwImgchange", $hi, ".circle_2");
        $hwImgindex++;
	},2000);
	/////////////////////////
	var $ryImgindex = 0;
	var autoChange_r = setInterval(function () {
		var $ri = $ryImgindex % 3;
		imgShow("#ryImgchange", $ri, ".circle_3");
		$ryImgindex++;
	},2000);
	
	function imgShow (img_ul, index, cir_ul) {
		$(img_ul).find("li").css("display","none");
		$(img_ul).find("li").eq(index).css("display","block");
		$(cir_ul).find("li").eq(index).addClass("current").siblings()
		.removeClass("current");
	}
	
	
	//gotop
	window.onscroll = function () {
	    if (document.documentElement.scrollTop + document.body.scrollTop > 200) {
	        document.getElementById("goTop").style.display = "block";
	    }
	    else {
	        document.getElementById("goTop").style.display = "none";
	    }
    }
	$("#goTop").click(function () {
		$("body").animate({"scroll-top":0},500);
	});
	
	
	//分类
	$(".side_nav li").click(function () {
		var $sIndex = $(this).index();
		$(this).addClass("side_nav_color").siblings().removeClass("side_nav_color");
		$(".detail").removeClass("detail_show");
		$(".detail").eq($sIndex).addClass("detail_show");
	});
	
	
	
});