/* jshint smarttabs:true */
/* global $, aload */

// Load event
$(window).load(function() {
	'use strict';
	aload();
});

// Document ready
$(document).ready(function() {
	'use strict';
	// anchor navigation
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			//console.log('Target: ' + target);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({ scrollTop: target.offset().top }, 1000);
				return false;
			}
		}
	});

	// vegasSlider
	$('#quienesSomosView').vegas({
		slides: [
			{ src: 'images/img-slider-main-1.jpg' },
			{ src: 'images/img-slider-main-2.jpg' }
		],
		timer: false
	});

	// menu
	$('.lines-button').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$('.menu').toggleClass('open animated fadeIn');
	});
	// menu item click
	$('.menu li a').click(function() {
		$('.lines-button').removeClass('close');
		$('.menu').toggleClass('open animated fadeIn');
	});

	// open detailView
	$('#openDetailQuienesSomos').click(function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		$(target).toggleClass('open animated slideInUp');
		$('html, body').animate({ scrollTop: $(window).height() }, 1000);
	});

	$('#terrestreView a').click(function(event) {
		event.preventDefault();
		var target = $(this).attr('data-target');
		$(target).toggleClass('open animated slideInUp');

		if (target === "#terrestreDetailProduct") {
			$('.terrestreSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		}
	});

	$('#maritimoView a').click(function(event) {
		event.preventDefault();
		var target = $(this).attr('data-target');
		$(target).toggleClass('open animated slideInUp');

		if (target === "#maritimoDetailServicio") {
			$('.maritimoSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		} else {
			$('#maritimoDetailProducto .row').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true,
				slidesToShow: 6
			});

			$('.maritimoProductoSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		}
	});

});
