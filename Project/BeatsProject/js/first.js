window.onload = function () {
	tt = document.getElementById("o1").getElementsByTagName("li");
	ti = document.getElementById("o2").getElementsByClassName("nav1");
	for(var i = 0; i < tt.length; i++){
		tt[i].index = i;
		tt[i].onmouseover = function () {
			for(var n = 0; n < tt.length; n++)
			tt[n].className="";
			this.className = "ccc";
			for(var n = 0; n < ti.length; n++) 
			ti[n].style.display = "none";
			ti[this.index].style.display = "block"
		}	
	
		ti[i].onmouseleave= function () {
			for(var n = 0; n < ti.length; n++) 
			ti[n].style.display = "none";
		}
	}
	
	
//	sou = document.getElementById("o1").getElementById("sou");
//	sousou = document.getElementById("sousou");
//	sou.onclick = function () {
//		sousou.style.display = "block";
//	}
//	sousou.onmouseout = function () {
//		sousou.style.display = "none";
//	}
	
//banner的轮播	
  var wrap=document.getElementById('two');
  pic=document.getElementById('pic').getElementsByTagName('img');
  list=document.getElementById('list').getElementsByTagName('li');

  index=0,
  timer=null;
  timer = setInterval(autoPlay, 3000);
 
 function autoPlay () {
  if (++index >= pic.length)
       index = 0;
       changePic(index);
 }
 function changePic (curIndex) {
  for (var i = 0; i < pic.length;i++) {
	  pic[i].style.display = "none";
//	  list[i].className = "";
  }
	  pic[curIndex].style.display = "block";
//	  list[curIndex].className = "on";
 }

}


