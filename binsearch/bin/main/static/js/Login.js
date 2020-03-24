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