function getId(id) {
	return document.getElementById(id);
}

var ipt = getId("ipt");
var ser = getId("ser_box");
var bot = getId("bot_box");
var oul = getId("oul");
var blur = getId("blur");
var bg = getId("bg");
var form = getId("formBox");
var ipt_text = getId("input_text");
const wl = document.querySelector('#welcome');
const wl_box = document.querySelector('#welcome_box');
const txt_p2 = document.querySelector('#txt_p2');
const txt_content = document.querySelector('#txt_content');

var ipt_flag = true;
var w; // 窗口宽度

ipt.oninput = function() {
	var ss = ipt.value;
	var url = "http://suggestion.baidu.com/su?cb=queryList&wd=" + ss;
	addScript(url);
}

ipt.onfocus = function() {
	var ss = ipt.value;
	var url = "http://suggestion.baidu.com/su?cb=queryList&wd=" + ss;
	addScript(url);
}

function queryList(data) {
	ss = document.getElementsByTagName("script")[0];
	document.body.removeChild(ss);

	var arr = data.s;
	oul.innerHTML = "";
	if (arr.length == 0) {
		bot.style.display = "none";
	} else {
		bot.style.display = "block";
	}

	for (var i = 0; i < arr.length; i++) {
		li = document.createElement("li");
		li.innerHTML = arr[i];
		li.onclick = function() {
			oul.innerHTML = "";
			ipt.value = this.innerHTML;
			bot.style.display = "none";
			form.submit();
		}
		oul.appendChild(li);
	}
}

function checkHttps() {
	BaiduHttps.useHttps();
};
function baiduWithHttps(formname) {
	var data = BaiduHttps.useHttps();
	if (data.s === 0) {
		return true;
	} else {
		formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
		return true;
	}
};

function addScript(url) {
	var s = document.createElement("script");
	s.src = url;
	s.type = "text/javascript";
	document.body.appendChild(s);
}

/* 取li */
lis = document.getElementsByTagName("#bot_box li");

/* 按键 */
var i = 0;

document.onkeydown = function(ev) {
	if (bot.style.display == "block") {

		if (ev.keyCode == 40) {
			for (var j = 0; j < lis.length; j++) {
				if (lis[j].className == "sel") {
					lis[j].className = "";
				}
			}

			if (i < lis.length) {
				lis[i].className = "sel";
				i++;
				if (i == lis.length) {
					i = 0;
				}
			}
		}

		if (ev.keyCode == 38) {
			m = 0
			for (; m < lis.length; m++) {
				if (lis[m].className == "sel") {
					lis[m].className = "";
					break;
				}
			}
			i = m;
			if (m > 0) {
				lis[m - 1].className = "sel";
			} else {
				lis[lis.length - 1].className = "sel";
			}
		}

		if (ev.keyCode == 13) {
			for (var n = 0; n < lis.length; n++) {
				if (lis[n].className == "sel") {
					ipt.value = lis[n].innerHTML;
				}
			}
			bot.style.display = "none";
		}
	} else {
		i = 0;
		m = 0;
	}
}
window.onload = function() {
	var bgUrl = getCookie("photoUrl");
	var flag = getCookie("flag");
	var choose = getCookie("choose");
	if (flag == null) {
		wl_box.style.display = "block";
		wl.classList.add('animated', 'bounceIn');
	} else {
	}
	if (bgUrl == null) {
		$("#bg").css("background-image",
				"url(https://api.dujin.org/bing/1920.php)");
		$(".blur").css("background-image",
				"url(https://api.dujin.org/bing/1920.php)");
	} else {
		$("#bg").css("background-image", "url(" + bgUrl + ")");
		$(".blur").css("background-image", "url(" + bgUrl + ")");
	}
	if (choose == null){
		$("#search_choose #baidu").css('animation', 'search_choose_true 0.5s forwards');
	}	else {
		$("#search_choose #"+choose).css('animation', 'search_choose_true 0.5s forwards');
		switch (choose) {
		case "baidu":{
			$("#formBox").attr("action","http://www.baidu.com/baidu");
			$("#ipt").attr("name","wd")
			break;
		}
		case "biying":{
			$("#formBox").attr("action","https://cn.bing.com/search");
			$("#ipt").attr("name","q")
			break;
		}
		case "google":{
			$("#formBox").attr("action","https://www.google.com/search");
			$("#ipt").attr("name","q");
			break;
		}
			
		default:
			break;
		}
	}
	

	w = $(window).width();
	if (w > 1150) {
		// ipt.style.width = "550px";
		ipt.style.animation = "ipt_getFocus 0.5s forwards";
	} else {
		// ipt.style.width = "350px";
		ipt.style.animation = "ipt_getFocus 0.5s forwards";
	}

	ipt.style.opacity = "1";

	document.getElementById("txt_p1").innerHTML = "「 " + statement() + " 」";
	document.getElementById("txt_p2").innerHTML = statementFrom();
	$("#txt_p2").fadeOut();
	ipt.focus();
	$("#txt").hide();
	
	blur.style.display = "block";
	blur.style.animation = "blur_click 0.5s forwards";
	setTimeout(function() {
		$("#txt").fadeIn(500);
	}, 1000);

}
var txt_flag = true;
ipt.onclick = function() {
	ipt_flag = true;
	ipt.style.animation = "ipt_getFocus 0.5s forwards";
	ipt.style.color = "#333";
	$("#input_text").hide(300);
	$("#search_choose").fadeIn(300);
	blur.style.display = "block";
	blur.style.animation = "blur_click 0.5s forwards";
	$("#txt_content").fadeIn(500);
	txt_flag = true;
	$("#txt").css("cursor", "pointer");
}
blur.onclick = function() {
	ipt_flag = false;
	ipt.style.animation = "ipt_loseFocus 0.5s forwards";
	ipt_text.style.color = "#FFF";
	ipt.value = "";
	$("#input_text").show(300);
	$("#search_choose").fadeOut(300);
	bot.style.display = "none";
	blur.style.animation = "blur_out 0.5s forwards";
	setTimeout(function() {
		blur.style.display = "none";
	}, 250);
	$("#txt_content").fadeOut(500);
	txt_flag = false;
	$("#txt").css("cursor", "default");
}
ipt.onmouseover = function() {
	if (ipt_flag == false) {
		ipt.style.animation = "ipt_over 0.3s forwards";
		ipt_text.style.animation = "ipt_text_over 0.3s forwards";
	}
}
ipt.onmouseout = function() {
	if (ipt_flag == false) {
		ipt.style.animation = "ipt_out 0.3s forwards";
		ipt_text.style.animation = "ipt_text_out 0.3s forwards";
	}
}