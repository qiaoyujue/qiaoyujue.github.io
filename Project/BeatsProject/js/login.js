window.onload = function(){

    var product     = Query('product');  //产品
	var color       = Query('color');	 //颜色
	var number1 	= Query('number1');  //序列号
	var mail 		= Query('Mail');     //电子邮箱
	var mailBegin 	= Query('MailBegin');//确认电子邮箱
	var submit 		= Query('submit');   //提交按钮
	

	//产品验证
//	product.onchange = productCheck;
	
	//颜色验证
//	color.onchange = colorCheck;
	
	//序列号验证
	number1.onchange=numberCheck;
	number1.onkeydown=numberCheck;
	number1.onkeyup=numberCheck;

	//邮箱验证
	mail.onkeydown = mailCheck;
	mail.onchange = mailCheck;
	mail.onkeyup = mailCheck;
	
	//邮箱再次验证
	mailBegin.onkeydown = mailCheckAgain;
	mailBegin.onchange = mailCheckAgain;
	mailBegin.onkeyup = mailCheckAgain;
	
    //提交事件
	submit.onclick = submitMsg;
	
}

//得到节点
var Query = function(id){

	return document.getElementById(id);
}

//产品验证
var productCheck = function(){

	if(Query('product').value == null || Query('product').value == '请选择产品（必填）'){

		Query('ProductWarningMsg').style.display = 'table-cell';
		
	}else{

		Query('ProductWarningMsg').style.display = 'none';
		
	}

}

//颜色验证
var colorCheck = function(){

	if(Query('color').value == null || Query('color').value == '颜色（必填）'){

		Query('ColorWarningMsg').style.display = 'table-cell';
		
	}else{

		Query('ColorWarningMsg').style.display = 'none';
		
	}

}


//序列号验证
var numberCheck = function(){

	if(Query('color').value == null || Query('color').value == ''){

		Query('NumberWarningMsg').style.display = 'table-cell';
		
	}else{

		Query('NumberWarningMsg').style.display = 'none';
		
	}
}

//邮箱验证
var mailCheck = function(){

	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if( filter.test(Query('Mail').value) ){

		Query('MailWarningMsg').style.display = 'none';
		
	}else{

		Query('MailWarningMsg').style.display = 'table-cell';
		
	}
}

//邮箱再次验证
var mailCheckAgain = function(){

	if(Query('Mail').value == Query('MailBegin').value){

		Query('MailBeginWarningMsg').style.display = 'none';
		
	}else{

		Query('MailBeginWarningMsg').style.display = 'table-cell';
		
	}
}



var submitMsg = function(){

	var flag = 0;
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(Query('color').value == null || Query('color').value == '颜色（必填）'){

		Query('ColorWarningMsg').style.display = 'table-cell';
	}else{

		flag++;
	}

	if(Query('product').value == null || Query('product').value == '请选择产品（必填）'){

		Query('ProductWarningMsg').style.display = 'table-cell';
	}else{

		flag++;
	}

	if(Query('number1').value == null || Query('number1').value == ''){

		Query('NumberWarningMsg').style.display = 'table-cell';
	}else{

		flag++;
	}

	if( !filter.test(Query('Mail').value) ){

		Query('MailWarningMsg').style.display = 'table-cell';
	}else{

		flag++;
	}

	if(Query('Mail').value != Query('MailBegin').value) {

		Query('MailBeginWarningMsg').style.display = 'table-cell';
	}else{

		flag++;
	}

	if(flag != 0){

		alert('请完善信息');
	}
    productCheck();
    colorCheck();
}
