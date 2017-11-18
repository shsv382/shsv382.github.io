$(document).ready(function(){
	$(".head-banner > h3").fadeIn(600, function(){
		$(".head-banner > h4").fadeIn(600, function(){
			$(".head-banner > h1").fadeIn(600);
		});
	});
	$(".show-menu-mob").on("click", function(){
		show_nav();
	});
});

function show_nav() {
	$(".nav-desktop").slideToggle(300);
}