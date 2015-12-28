/* jshint smarttabs:true */
/* global $, aload */

// Dinamic Height
function calculateHeight(element) {
	'use strict';
	var windowHeight = $(window).height();
	$(element).height(windowHeight);
}

// Load event
$(window).load(function() {
	'use strict';
	aload();
	calculateHeight('.full-height');
});

// Document ready
$(document).ready(function() {
	'use strict';
	// resize
	$(window).resize(function() { calculateHeight('.full-height'); });

	// anchor navigation
	$('a[href*=#]:not([href=#], .btn_plus)').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			//console.log('Target: ' + target);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				if(this.hash === '#nosotros'){
					openMasInfo(target.find('.btn_plus').attr('href'));
				} else {
					$('html, body').animate({ scrollTop: target.offset().top }, 1000);
				}
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

});