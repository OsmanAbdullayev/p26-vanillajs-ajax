$(document).ready(function () {
	$(".owl-carouselOne").owlCarousel({
		loop: true,
		margin: 10,
		// nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});
	$(".owl-carouselTwo").owlCarousel({
		loop: true,
		margin: 10,
		// nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	
});
