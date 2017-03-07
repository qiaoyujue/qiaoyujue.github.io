window.onload = function () {
	var btn = document.getElementById("content").getElementsByTagName("input");
	var imga = document.getElementById("tab").getElementsByTagName("div");
	var picc = document.getElementById("pic1").getElementsByClassName("picc");
	for (var i=0;i<btn.length;i++) {
		btn[i].index = i;
		btn[i].onclick = function () {
			for(var m=0;m<btn.length;m++)
			 btn[m].className = "";
			 this.className = "button";
			 
			 for (var m=0;m<imga.length;m++) {
			 	imga[m].style.display = "none";
			 	imga[this.index].style.display = "block";
			 	picc[m].style.display = "none";
			 	picc[this.index].style.display = "block";
			 }
		}
	}
	var imgbtn = document.getElementById("tab").getElementsByTagName("img");
	var picmc = document.getElementById("pic1").getElementsByTagName("img");
	for (var j=0;j<imgbtn.length;j++) {
		imgbtn[j].index = j;
		imgbtn[j].onclick = function () {
			for(var n=0;n<imgbtn.length;n++)
			imgbtn[n].className = "";
			this.className = "imga";
			for (var n=0;n<picmc.length;n++) {
				picmc[n].style.display = "none";
				picmc[this.index].style.display = "block";
			}
		}
	}
}