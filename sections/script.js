$(document).ready(function(){
	head_banner();
	img_change();
	$(".show-menu-mob").on("click", function(){
		show_nav();
	});
});

function show_nav() {
	$(".nav-desktop").slideToggle(300);
}

function head_banner() {
	$(".head-banner > h1").fadeIn(600);
}

function img_change() {
	$("head-banner-image").css({opacity: 0.0});
	$("image-1").animate({opacity: 1.0}, 100);
		var i = 0;
		var timerId = setInterval(function() {
			$(".image-" + (i%5 + 1)).animate({opacity: 1.0}, 1000);
			var past = i%5 == 0 ? $(".image-5") : $(".image-" + (i%5));
			past.animate({opacity: 0.0}, 1000);
			i++;
			hb.style.backgroundSize = "cover";
		}, 5000);
	
}