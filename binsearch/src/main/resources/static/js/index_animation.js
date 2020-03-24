function times_over() {
    $("#times").css("animation", "times_scale_over 0.3s forwards");
    $("#times_border").css("animation", "times_over 0.3s forwards");
}
function times_out() {
    $("#times").css("animation", "times_scale_out 0.3s forwards");
    $("#times_border").css("animation", "times_out 0.3s forwards");
}
$("#txt").mouseenter(function () {
    if(txt_flag==true){
        $("#txt").css("animation", "txt_over 0.5s forwards");
        $("#txt_p2").show(300);
    }
});
$("#txt").mouseleave(function () {
    if(txt_flag==true){
        $("#txt").css("animation", "txt_out 0.5s forwards");
        $("#txt_p2").hide(500);
    }
});
var wl_close_enter_flag=false;
function wl_start() {
    SetCookie("flag","true");
    $("#welcome").css('animation', '');
    wl.classList.add('animated', 'bounceOut');
    setTimeout(function () {
        wl_box.classList.add('animated', 'fadeOut');
    }, 500);
    setTimeout(function () {
        $("#welcome_box").css("display", "none");
    }, 1000);
    ipt.focus();
    wl_close_enter_flag=true;
}
$("#welcome_close").mouseenter(function () {
    if(wl_close_enter_flag){}
    else{
        $("#welcome_close").css('animation', 'wl_close_enter 0.8s forwards');
        $("#welcome").css('animation', 'wl_enter 0.5s forwards');
    }
});
$("#welcome_close").mouseleave(function () {
    if(wl_close_enter_flag){}
    else{
        $("#welcome_close").css('animation', 'wl_close_leave 0.8s forwards');
        $("#welcome").css('animation', 'wl_leave 0.5s forwards');
    }
});

