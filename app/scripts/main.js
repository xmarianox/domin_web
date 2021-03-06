/* jshint smarttabs:true */
/* global $, aload, SmartPhone  */

// Process del envio.
function enviado() {
	'use strict';
	$('#contact_form').hide();
	$('#success_message').show();
}
// Contacto.
function contacto() {
	'use strict';
	// Data.
	var urlDestination = 'backend/sendmail.php',
	name = $('#name').val().trim().replace('Nombre', ''),
	email = $('#email').val().trim().replace('Email', ''),
	message = $('#message').val().trim();
	// ragexs
	var regexpChars = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\- ]+$/;
	var regexpMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate inputs
	if ((email === '') || (!regexpMail.test(email))) {
		$('#email').addClass('error');
		$('#email').val('Email inválido');
		return false;
	} else if ((name === '') || (!regexpChars.test(name))) {
		$('#name').addClass('error');
		$('#name').val('Nombre inválido');
		return false;
	} else if (message === '') {
		$('#message').addClass('error');
		return false;
	} else {
		// Envio del AJAX
		$.ajax({
			type: 'POST',
			url: urlDestination,
			data: {
				'form': 'contacto',
				'nombre': name,
				'mail': email,
				'consulta': message
			},
			success: function(data) {
				enviado();
				console.log('Envio de datos OK!' + data);
			}
		});
		return false;
	}
}
// Calculate imageWidth
function calculateImages() {
	'use strict';
	var vw = $(window).innerWidth();
	$('.product-item img').css('width', (vw - 31));
}

var mobileFirst;
var androidPhone;

// Load event
$(window).load(function() {
	'use strict';
	aload();
});

// Document ready
$(document).ready(function() {
	'use strict';

	mobileFirst = SmartPhone.isAny();
	androidPhone = SmartPhone.isAndroid();

	// anchor navigation
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				if(this.hash === '#quienesSomosView') {
					$('#quienesSomosDetail').toggleClass('open animated slideInUp');
					$('html, body').animate({ scrollTop: $('#quienesSomosDetail').offset().top - 400 }, 1000);
				} else {
					$('html, body').animate({ scrollTop: target.offset().top }, 1000);
				}
				return false;
			}
		}
	});

	if (androidPhone) {
		$('.btn-plus').addClass('android');
	}
	if (mobileFirst) {

		$('#main-slider-mobile').slick({
			autoplay: true,
			fade: true,
			arrows: false,
			infinite: true,
			mobileFirst: true
		});

		// open detailView
		$('#openDetailQuienesSomosMobile').click(function(event) {
			event.preventDefault();
			var target = $(this).attr('href');
			$(target).toggleClass('open animated slideInUp');
			$('html, body').animate({ scrollTop: $(target).offset().top - 600 }, 1000);
		});

		// Calculate imageWidth
		calculateImages();

		if (SmartPhone.isIPad) {
			$('body').addClass('ipad');
		}

		// Terrestre detailView
		$('#terrestreView a').click(function(event) {
			event.preventDefault();
			$('.detail').removeClass('open');
			var target = $(this).attr('data-target-mobile');
			$(target).addClass('open animated slideInUp');
			$('html, body').animate({ scrollTop: $('#terrestreView').offset().top + 600 }, 1000);
			if (target === '#terrestreDetailProductMobile') {
				$('#terrestreDetailProductMobile .row').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 1
				});

				$('.terrestreSlider').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true
				});

			} else {
				$('#terrestreDetailServicioMobile .row').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: false,
					slidesToShow: 1
				});
			}
		});
		// Maritimo detailView
		$('#maritimoView a').click(function(event) {
			event.preventDefault();
			$('.detail').removeClass('open');
			var target = $(this).attr('data-target-mobile');
			$(target).addClass('open animated slideInUp');
			$('html, body').animate({ scrollTop: $('#maritimoView').offset().top + 600 }, 1000);

			if (target === '#maritimoDetailServicioMobile') {
				$('#maritimoDetailServicioMobile .row').slick({
					arrows: false,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 1
				});

				$('.maritimoSlider').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true
				});
			} else {
				$('#maritimoDetailProductoMobile .row').slick({
					arrows: false,
					infinite: false,
					mobileFirst: true,
					adaptiveHeight: true,
					slidesToShow: 1
				});

				$('.maritimoProductoSlider').slick({
					arrows: true,
					infinite: false,
					mobileFirst: true
				});
			}
		});
	} else {
		$('#main-slider-desktop').slick({
			autoplay: true,
			fade: true,
			arrows: false,
			infinite: true,
			mobileFirst: true
		});

		// open detailView
		$('#openDetailQuienesSomos').click(function(event) {
			event.preventDefault();
			var target = $(this).attr('href');
			$(target).toggleClass('open animated slideInUp');
			$('html, body').animate({ scrollTop: $('#quienesSomosDetail').offset().top - 400 }, 1000);
		});

		// Terrestre detailView
		$('#terrestreView a').click(function(event) {
			event.preventDefault();
			$('.detail').removeClass('open');
			var target = $(this).attr('data-target');
			$(target).addClass('open animated slideInUp');
			$('html, body').animate({ scrollTop: $(target).offset().top - 1000 }, 1000);

			if (target === '#terrestreDetailProduct') {
				if ($(window).innerWidth() <= 1024) {
					$('#terrestreDetailProduct .row').slick({
						arrows: true,
						infinite: false,
						mobileFirst: true,
						adaptiveHeight: false,
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
			$('html, body').animate({ scrollTop: $(target).offset().top - 1500 }, 1000);

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
						adaptiveHeight: false,
						slidesToShow: 4
					});
				} else {
					$('#maritimoDetailProducto .row').slick({
						arrows: true,
						infinite: false,
						mobileFirst: true,
						adaptiveHeight: false,
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
	}

	$('.close_overlay').click(function(event) {
		event.preventDefault();
		$('body').removeClass('hidden');
		$('.overlay').hide();
	});

	// $('.overlay a').click(function(event) {
	// 	event.preventDefault();
	// 	$('body').removeClass('hidden');
	// 	$('.overlay').hide();
	// });

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

	// contacto.
	$('#email').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#name').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#message').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#submitContact').click(function(event) {
		event.preventDefault();
		contacto();
	});

});
