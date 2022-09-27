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

$("button.black").click(function () {
	$("body").removeClass().addClass("black");
});

$("button.blue").click(function () {
	$("body").removeClass();
});

$("button.indigo").click(function () {
	$("body").removeClass().addClass("indigo");
});

// 

$("button.coral").click(function () {
	$("body").removeClass().addClass("coral");
});

$("button.teal").click(function () {
	$("body").removeClass().addClass("teal");
});

$("button.green").click(function () {
	$("body").removeClass().addClass("green");
});

$("button.grey").click(function () {
	$("body").removeClass().addClass("grey");
});

$("button.orange").click(function () {
	$("body").removeClass().addClass("orange");
});