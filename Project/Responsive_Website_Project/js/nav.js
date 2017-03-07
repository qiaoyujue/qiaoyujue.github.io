$(function () {
	$(".none").click(function () {
		$("#header .link").slideToggle("slow");
	});
	
//	$("#tour figure").mouseover(function (e) {
//		var $s = $(this).find("img").prop("src");
//	    $("body").append("<div id='bigShow'><img src=" + $s
//	    + "></div>");
//	    $("#bigShow").css("left",(e.pageX + 10) + "px");
//	    $("#bigShow").css("top",(e.pageY + 10) + "px");
//	    $("#bigShow").show();
//	}).mousemove(function (e) {
//		$("#bigShow").css("left",(e.pageX + 10) + "px");
//	    $("#bigShow").css("top",(e.pageY + 10) + "px");
//	}).mouseout(function () {
//		$("#bigShow").remove();
//	});
});