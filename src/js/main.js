$(document).ready(function() {
	$(".menu-icon").click(function() {
		$(".nav-list").addClass("active");
		$(".overlay").addClass("active");
	});

	$(".overlay").click(function() {
		$(".nav-list").removeClass("active");
		$(".overlay").removeClass("active");
	});

	$(".close-icon").click(function() {
		$(".nav-list").removeClass("active");
		$(".overlay").removeClass("active");
	});

	$(".owl-carousel").owlCarousel({
		responsiveClass: true,
		dots: true,
		nav: true,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			767.98: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
});
