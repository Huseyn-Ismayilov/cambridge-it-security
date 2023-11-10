$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 60) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.toggle').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});



$('.select_language .btn').click(function () {
	$(this).toggleClass('active');
	$(this).next().slideToggle()
});




const rangeMain = document.querySelectorAll(".rangeSlider");
function customSlider(e) {
	const slider = e.currentTarget;
	const thumb = slider.closest(".rangeSlider").querySelector('.rsThumb');
	const tooltip = slider.closest(".rangeSlider").querySelector('.rsTooltip');
	const progress = slider.closest(".rangeSlider").querySelector('.rsProgress');
	const maxVal = slider.getAttribute("max");
	const val = (slider.value / maxVal) * 100 + "%";
	tooltip.innerHTML = slider.value;
	progress.style.width = val;
	thumb.style.left = val;
}
for (let i = 0; i < rangeMain.length; i++) {
	const slider = rangeMain[i].querySelector(".rsBar");
	slider.addEventListener("input", customSlider);
	slider.addEventListener("touchstart", customSlider);
	slider.addEventListener("touchmove", customSlider);
	const e = new Event('touchstart');
	slider.dispatchEvent(e);
};
// Range slider error function
function rangeSlider_error(id) {
	if ($(id).val() < 1) {
		$(id).parents('.form-group').addClass('red');
		$(id).parents('.form-group').find('.errorText').removeClass('hide');
		return false;
	} else {
		$(id).parents('.form-group').removeClass('red');
		$(id).parents('.form-group').find('.errorText').addClass('hide');
		return true;
	}
}


$('.accardion_item .head').click(function () {
	$(this).parent().toggleClass('opened');
	$(this).next().slideToggle()
});

$('.mobile_menu .main_menu li > a').click(function () {
	$(this).toggleClass('opened')
	$(this).parent().toggleClass('active');;
	$(this).next().slideToggle()
	return false
});



var swiper = new Swiper(".workWithUs .slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
});


var swiper = new Swiper(".content_slider .slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".content_slider .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".content_slider .next_arrow ",
		prevEl: ".content_slider .prev_arrow",
	},
});



var swiper = new Swiper(".service_details .image_slider", {
	slidesPerView: 1,
	spaceBetween: 22,
	pagination: {
		el: ".service_details .swiper-pagination",
		clickable: true,
	},
});