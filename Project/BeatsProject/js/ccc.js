window.onload = function () {
	tt = document.getElementById("o1").getElementsByTagName("li");
	ti = document.getElementById("o2").getElementsByTagName("div");
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
}