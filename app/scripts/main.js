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

	$('.overlay a').click(function() {
		$('body').removeClass('hidden');
		$('.overlay').fadeToggle();
	});

	$('#main-slider').slick({
		autoplay: true,
		fade: true,
		arrows: false,
		infinite: true,
		mobileFirst: true
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
		$('.detail').removeClass('open');
		var target = $(this).attr('data-target');
		$(target).addClass('open animated slideInUp');

		if (target === '#terrestreDetailProduct') {
			if ($(window).innerWidth() <= 1024) {
				$('#terrestreDetailProduct .row').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 4
				});
			}
			$('.terrestreSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		}
	});

	$('#maritimoView a').click(function(event) {
		event.preventDefault();
		$('.detail').removeClass('open');
		var target = $(this).attr('data-target');
		$(target).addClass('open animated slideInUp');

		if (target === '#maritimoDetailServicio') {
			$('.maritimoSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		} else {
			if ($(window).innerWidth() <= 1024) {
				$('#maritimoDetailProducto .row').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 4
				});
			} else {
				$('#maritimoDetailProducto .row').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 6
				});
			}

			$('.maritimoProductoSlider').slick({
				arrows: true,
				infinite: false,
				mobileFirst: true
			});
		}
	});

});
