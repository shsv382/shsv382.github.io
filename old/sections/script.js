$(document).ready(function(){
	head_banner();
	img_change();
	$(".show-menu-mob").on("click", function(){
		show_nav();
	});
	dev_contact.onclick = show_dev_contact;
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

function show_dev_contact() {
	if (dev_contact.id == "dev_contact") {
		$("footer").append("<a href='tel:+79654778779'>+7-965-4-778-779</a>");
		$("footer").append("; ");
		$("footer").append("<a href='mailto:shsv382@gmail.com'>shsv382@gmail.com</a>");
	}
	dev_contact.id = "";
	$("footer > a").css("color", "#471200");
	$("footer > a").fadeTo(500, 0.5);
	$("footer > a").fadeTo(500, 1);
	return false;
}