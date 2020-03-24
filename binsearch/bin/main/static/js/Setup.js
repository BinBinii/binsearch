const customWindow = document.querySelector('#custom_window');
const customDel = document.querySelector('#custom_del');
const changePhoto = document.querySelector('#change_photo');

var times_btn = false;
var photo_close_flag=false;
var login_close_flag=false;

$(window).resize(function(){
    $("#custom_window").css("display", "none");
});
function times_click() {
    if (times_btn == false) {
        $("#Setup").fadeIn(300);
        $("#out").fadeOut(300);
        ipt_out();
        blur.style.display = "block";
        blur.style.animation = "blur_click 0.5s forwards";
        times_btn = true;
    } else {
        $("#Setup").fadeOut(300);
        $("#out").fadeIn(300);
        blur.style.animation = "blur_out 0.5s forwards";
        setTimeout(function () {
            blur.style.display = "none";
        }, 250);
        times_btn = false;
    }
    $("#custom_window").css("display","none");
    $("#custom_del").css("display","none");
    $("#search_choose").fadeOut(300);
}
// $("#Setup_box").not("#Setup_btn").click(function () {
//     $("#Setup").fadeOut(300);
//     $("#out").fadeIn(300);
//     blur.style.animation = "blur_out 0.5s forwards";
//     setTimeout(function () {
//         blur.style.display = "none";
//     }, 250);
//     times_btn = false;
// });
function Setup_click() {
    $("#Setup").fadeOut(300);
    $("#out").fadeIn(300);
    blur.style.animation = "blur_out 0.5s forwards";
    setTimeout(function () {
        blur.style.display = "none";
    }, 250);
    times_btn = false;
    $("#custom_window").css("display","none");
    $("#custom_del").css("display","none");
    $("#search_choose").fadeOut(300);
}
$("#ShortcutBar_Box").click(function () {
    $("#Setup").fadeOut(300);
    $("#out").fadeIn(300);
    blur.style.animation = "blur_out 0.5s forwards";
    setTimeout(function () {
        blur.style.display = "none";
    }, 250);
    times_btn = false;
    $("#custom_window").css("display","none");
    $("#custom_del").css("display","none");
    $("#search_choose").fadeOut(300);
});
var customWindow_flag = false;
var customDel_flag = false;
var linkId = null;
var value = null
$("#ShortcutBar_custom li").click(function (e) {
	value = $(this).text();
	linkId = $(this).attr("id");

	if(value == '+'){
		$("#custom_del").css("display","none");
	    var top = getElementToPageTop(this) - 190 + "px";
	    var left = getElementToPageLeft(this) - 50 + "px";
		$("#custom_window").css("display", "block");
	    $("#custom_window").css({ "top": top, "left": left });
	    if (customWindow_flag) {
	        $("#custom_window").css("display", "none");
	        setTimeout(function () {
	            $("#custom_window").css("display", "block");
	            customWindow.classList.add('animated', 'bounceIn');
	        }, 100)

	    } else {
	        customWindow.classList.add('animated', 'bounceIn');
	        customWindow_flag = true;
	    }
	}else{
		
	}
});
$("#ShortcutBar_custom li").contextmenu(function(e){
	value = $(this).text();
	linkId = $(this).attr("id");
	
	if(value != '+'){
		e.preventDefault();
		$("#custom_window").css("display","none");
	    var top = getElementToPageTop(this) + 50 + "px";
	    var left = getElementToPageLeft(this) + 55 + "px";
		$("#custom_del").css("display", "block");
	    $("#custom_del").css({ "top": top, "left": left });
	    if (customDel_flag) {
	        $("#custom_del").css("display", "none");
	        setTimeout(function () {
	            $("#custom_del").css("display", "block");
	            customDel.classList.add('animated', 'bounceIn');
	        }, 100)

	    } else {
	    	customDel.classList.add('animated', 'bounceIn');
	    	customDel_flag = true;
	    }
	}
	
});
$("#custom_btn").click(function(){
	addLink(linkId);
	$("#custom_window").css("display","none");
});
$("#custom_del").click(function(){
	delLink(linkId);
	$("#custom_del").css("display","none");
});

function getElementToPageTop(el) {
    if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop;
    }
    return el.offsetTop;
}
function getElementToPageLeft(el) {
    if (el.parentElement) {
        return this.getElementToPageLeft(el.parentElement) + el.offsetLeft;
    }
    return el.offsetLeft;
}
function ipt_out() {
    ipt_flag = false;
    ipt.style.animation = "ipt_loseFocus 0.5s forwards";
    ipt_text.style.color = "#FFF";
    ipt.value = "";
    $("#input_text").show(300);
    bot.style.display = "none";
    $("#txt_content").fadeOut(500);
    txt_flag = false;
    user_setup_hide();
    $("#txt").css("cursor", "default");
}
$("#Setup_btn").mouseenter(function () {
    $("#Setup_btn img").attr("src", "../img/Setup_.png");
});
$("#Setup_btn").mouseleave(function () {
    $("#Setup_btn img").attr("src", "../img/Setup.png");
});
$("#Setup_btn").click(function () {
	$("#change_photo").css("display", "block");
    $("#photo_box").fadeIn(500);
    $("#times").css("animation", "change_photo_view_out 0.3s forwards");
    $("#Setup_btn").css("animation", "change_photo_view_out 0.3s forwards");
    $("#User_btn").css("animation", "change_photo_view_out 0.3s forwards");
    $("#ShortcutBar_Box").css("animation", "change_photo_view_out 0.3s forwards");
    $("#ShortcutBar_custom_box").css("animation", "change_photo_view_out 0.3s forwards");
    $("#username_box").css("animation", "change_photo_view_out 0.3s forwards");
    $(".blur").css("animation", "bg_blur_c1 0.5s forwards");
    $("#change_photo").css("animation", "change_photo_show 0.5s forwards");
    $("#Login_box").css("display", "none");
    $("#custom_window").css("display","none");
    $("#custom_del").css("display","none");
    user_setup_hide();
    photo_close_flag=false;
});

$("#User_btn").mouseenter(function () {
    $("#User_btn img").attr("src", "../img/User_.png");
});
$("#User_btn").mouseleave(function () {
    $("#User_btn img").attr("src", "../img/User.png");
});
$("#User_btn").click(function () {
	
	login_from();
});
function login_from(){
	$("#username_input").focus();
	$("#Login_box").css("display", "block");
    $("#photo_box").fadeIn(500);
    $("#times").css("animation", "change_photo_view_out 0.3s forwards");
    $("#Setup_btn").css("animation", "change_photo_view_out 0.3s forwards");
    $("#User_btn").css("animation", "change_photo_view_out 0.3s forwards");
    $("#ShortcutBar_Box").css("animation", "change_photo_view_out 0.3s forwards");
    $("#ShortcutBar_custom_box").css("animation", "change_photo_view_out 0.3s forwards");
    $("#username_box").css("animation", "change_photo_view_out 0.3s forwards");
    $(".blur").css("animation", "bg_blur_c1 0.5s forwards");
    $("#Login_box").css("animation", "change_photo_show 0.5s forwards");
    $("#change_photo").css("display", "none");
    $("#custom_window").css("display","none");
    $("#custom_del").css("display","none");
    login_close_flag=false;
}
var user_setup_flag=false;
function user_setup_show(){
	if(user_setup_flag==false){
		$("#user_setup").fadeIn(300);
		user_setup_flag=true;
	}else{
		$("#user_setup").fadeOut(300);
		user_setup_flag=false;
	}
	
}
function user_setup_hide(){
	$("#user_setup").fadeOut(300);
	user_setup_flag=false;
	
}
// $("#photo_box").click(function () {
//     $("#photo_box").fadeOut(500);
//     $("#times").css("animation","change_photo_view_show 0.3s forwards");
//     $("#Setup_btn").css("animation","change_photo_view_show 0.3s forwards");
//     $("#ShortcutBar_Box").css("animation","change_photo_view_show 0.3s forwards");
//     $(".blur").css("animation", "bg_blur_c2 0.5s forwards");
//     $("#change_photo").css("animation", "change_photo_out 0.3s forwards");
// });
function photo_close(ids) {
    var id = "#" + ids;
    $("#photo_box").fadeOut(500);
    $("#times").css("animation", "change_photo_view_show 0.3s forwards");
    $("#Setup_btn").css("animation", "change_photo_view_show 0.3s forwards");
    $("#User_btn").css("animation", "change_photo_view_show 0.3s forwards");
    $("#ShortcutBar_Box").css("animation", "change_photo_view_show 0.3s forwards");
    $("#ShortcutBar_custom_box").css("animation", "change_photo_view_show 0.3s forwards");
    $("#username_box").css("animation", "change_photo_view_show 0.3s forwards");
    $(".blur").css("animation", "bg_blur_c2 0.5s forwards");
    $(id).css("animation", "change_photo_out 0.5s forwards");
    // changePhoto.classList.add('animated', 'flipOutY');
    photo_close_flag=true;login_close_flag=true;
}

$("#photo_close").mouseenter(function () {
    if(photo_close_flag){

    }else{
        $("#photo_close").css('animation', 'wl_close_enter 0.8s forwards');
        $("#change_photo").css('animation', 'wl_enter 0.5s forwards');
    }
});
$("#photo_close").mouseleave(function () {
    if(photo_close_flag){

    }else{
        $("#photo_close").css('animation', 'wl_close_leave 0.8s forwards');
        $("#change_photo").css('animation', 'wl_leave 0.5s forwards');
    }
});
$("#Login_close").mouseenter(function () {
    if(login_close_flag){

    }else{
        $("#Login_close").css('animation', 'wl_close_enter 0.8s forwards');
        $("#Login_box").css('animation', 'wl_enter 0.5s forwards');
    }
});
$("#Login_close").mouseleave(function () {
    if(login_close_flag){

    }else{
        $("#Login_close").css('animation', 'wl_close_leave 0.8s forwards');
        $("#Login_box").css('animation', 'wl_leave 0.5s forwards');
    }
});
$(".photo_list li img").click(function () {
    // var url=$(this)[0].src;
    var url = this.getAttribute("src")
    SetCookie("photoUrl", url);
    $("#bg").css("background-image", "url(" + url + ")");
    $(".blur").css("background-image", "url(" + url + ")");
});

function SetCookie(name, value) {
    var Days = 300; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return (arr[2]);
    return null;
}
