const Logout_choose = document.querySelector('#Logout_choose');
function Logout_choose_show(){
	$("#Logout_choose").fadeIn(500);
	$("#Logout_choose_box").fadeIn(500);
//	Logout_choose.classList.add('animated','bounceIn');
}
$("#Logout_hide").click(function(){
//	Logout_choose.classList.add('animated','bounceOut');
	$("#Logout_choose").fadeOut(500);
	$("#Logout_choose_box").fadeOut(500);
//	setTimeout(function() {
//		$("#Logout_choose_box").fadeOut(500);
//	}, 500);
});