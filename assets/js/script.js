$(document).ready(function () {
	$(".toggle").click(function () {
		$("nav#colors").toggleClass("shown");
	});

	$("#hamburger").click(function () {
		$("aside.verticalMenu").toggleClass("showNav");
		$(this).html() == '<i class="fa-solid fa-xmark"></i>'
			? $(this).html('<i class="fa-solid fa-bars"></i>')
			: $(this).html('<i class="fa-solid fa-xmark"></i>');
	});
});

$("li.top").hover(function () {
	$(".sub", this).slideToggle("fast");
});

$("li.topAside").click(function () {
	$(".sub", this).slideToggle("fast");
});
