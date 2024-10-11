// Slick Slider

'use strict';

(function () {
	// category slider

	var categorySlider = document.querySelector('.category-slider');

	if (categorySlider) {
		initializeSlick(categorySlider, {
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			dots: false,
			arrows: true,
			prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
			nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},
				{
					breakpoint: 820,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],
		});
	}

	// Check if the element with class 'team-slider' exists
	var teamSlider = document.querySelector('.team-slider');

	if (teamSlider) {
		initializeSlick(teamSlider, {
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			dots: false,
			arrows: true,
			prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
			nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 820,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}

	// hero slider

	// Check if the element with class 'hero-slider' exists
	var heroSlider = document.querySelectorAll('.hero-slider');

	if (heroSlider) {
		initializeSlick(heroSlider, {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true,
			arrows: false,
		});
	}

	function initializeSlick(element, options) {
		if (window.jQuery && jQuery.fn.slick) {
			// If jQuery and Slick Slider are available, use jQuery to initialize the slider
			$(element).slick(options);
		} else {
			// If not, you can use the Slick Slider's native JavaScript initialization
			var slider = new Slick(element, options);
		}
	}

	// slider 8 columns
	var slider8Columns = document.querySelectorAll('.slider-8-columns');

	if (slider8Columns.length) {
		slider8Columns.forEach(function (sliderElement) {
			var id = sliderElement.id;
			var sliderID = '#' + id;
			var appendArrowsClassName = '#' + id + '-arrows';

			initializeSlick(sliderID, {
				infinite: true,
				slidesToShow: 8,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				arrows: true,
				speed: 1000,
				loop: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						},
					},
				],
				prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
				nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
				appendArrows: appendArrowsClassName,
			});
		});
	}
	// product slider
	var productSliderSecond = document.querySelectorAll('.product-slider-second');

	if (productSliderSecond.length) {
		productSliderSecond.forEach(function (sliderElement) {
			var id = sliderElement.id;
			var sliderID = '#' + id;
			var appendArrowsClassName = '#' + id + '-arrows';

			initializeSlick(sliderID, {
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				arrows: true,
				speed: 1000,
				loop: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
						},
					},
					{
						breakpoint: 990,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
				prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
				nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
				appendArrows: appendArrowsClassName,
			});
		});
	}

	// Check if the slider-for element exists
	// Initialize the slider-for
	var sliderFor = document.querySelector('.slider-for');
	if (sliderFor) {
		$(sliderFor).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
		});
	}

	// Initialize the slider-nav
	var sliderNav = document.querySelector('.slider-nav');
	if (sliderNav) {
		$(sliderNav).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
			nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
		});
	}
	// product slider

	var productSliderFourColumn = document.querySelector('.product-slider-four-column');

	if (productSliderFourColumn) {
		initializeSlick(productSliderFourColumn, {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,

			dots: false,
			arrows: true,
			prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
			nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},

				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}

	// product slider
	var productSlider = document.querySelectorAll('.product-slider');

	if (productSlider) {
		initializeSlick(productSlider, {
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			dots: false,
			arrows: true,
			prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
			nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},
				{
					breakpoint: 820,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}
})();
