$(function () {
	$(".area_num").click(function () {
		$(".down").css("display","block");
	}).mouseout(function () {
		$(".down").css("display","none");
	});
	//注册方式
	$("#phone_reg a").click(function () {
		$("#email_reg").css("display","block");
		$("#phone_reg").css("display","none");
	});
	$("#email_reg a").click(function () {
		$("#email_reg").css("display","none");
		$("#phone_reg").css("display","block");
	});
	
	//判断
	$("input").focus(function () {
    	$(".err").hide();
    });
	var $reg_phone = /^[1][358][0-9]{9}$/;
	var $reg_email = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
	var $reg_psd = /^[a-z0-9_-]{8,32}$/;
	function checkPhone () {
		var $phone = $(".user").val();
		if ($phone != "") {
			if ($reg_phone.test($phone)) {
				return true;
		    }else{
				$(".ph_err").show();
			}
		}else{
			$(".ph_err").show().html("请输入手机号");
		}
	}
	function checkCode () {
		
	}
	$(".user").blur(function () {
		checkPhone();
		next();
	});
	
	$(".code_txt").blur(function () {
		checkCode();
	});
	function checkEmail () {
		var $email = $(".u_email").val();
		if ($email != "") {
			if ($reg_email.test($email)) {
				return true;
			}else{
				$(".email_err").show();
			}
		}else{
			$(".email_err").show().html("请输入邮件地址");
		}
	}
	$(".u_email").blur(function () {
		checkEmail();
		next();
	});
	$(".user").blur(function () {
		checkEmail();
	});
	////////////
	function next () {
		if (checkPhone() == true || checkEmail() == true) {
			$(".next span").css("opacity","1");
			$(".next").click(function () {
	            $("#phone_reg").css("display","none");
	            $("#email_reg").css("display","none");
	            $(".reg_psd").css("display","block");
			});
		}
	}
	



	//设置密码 //////////////
	function checkPsd () {
		var $psd = $("#psd").val();
		if ($psd != "") {
			if ($reg_psd.test($psd)) {
				return true;
			}else{
				$(".psd_err").show();
			}
		}else{
			$(".psd_err").show().html("请输入密码");
		}
	}
	$("#psd").blur(function () {
		checkPsd();
	});
	
	function reCheckPsd () {
		var $repsd = $("#rePsd").val();
		if ($repsd != "" && ($("#psd").val()==$repsd)) {
			return true;
		}else{
			$(".repsd_err").show();
		}
	}
	$("#rePsd").blur(function () {
		reCheckPsd();
	});
});