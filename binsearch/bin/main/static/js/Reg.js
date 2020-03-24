function btn_move(id){
    var ids="#"+id;
    $(ids).css("animation","submit_animation_move 0.8s forwards");
}
function btn_out(id){
    var ids="#"+id;
    $(ids).css("animation","submit_animation_out 0.8s forwards");
}
window.onload = function(){
    if(document.documentElement.clientWidth<712){
        $('#text_content').html("");
    }
    else{
        //$('#text_content_txt1').html("Welcome");
        $('#text_content').html("<p>Welcome</p><p>My firend</p><p></p>")
    }
}
window.onresize = function(){
    if(document.documentElement.clientWidth<712){
        $('#text_content').html("");
    }
    else{
        //$('#text_content_txt1').html("Welcome");
        $('#text_content').html("<p>Welcome</p><p>My firend</p><p></p>")
    }
}

const message = document.querySelector('#message');
function login_true(){
    $("#message").css('display','block');
    message.classList.add('animated','fadeInDown');
    setTimeout(function(){
        message.classList.add('animated','fadeOutUp');
        setTimeout(function(){
            $("#message").css('display','none');
        },1000);
    },5000);
}

function validate_form(){
	var password = $("input[name='password']").val();
	var confirm_password = $("input[name='confirm_password']").val();
	if(password != confirm_password){
		return false;
	}else{
		if(password.length()>=8&&password.length()<=16){
			return true;
		}else{
			return false;
		}
	}
}