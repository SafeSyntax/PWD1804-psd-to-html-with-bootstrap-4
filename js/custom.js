$(document).ready(function(){


	$('.our-slider-1').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    mouseDrag: false,
	    navText: ["<<",">>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.our-slider-2').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: true,
	    autoplay: true,
	    mouseDrag: false,
	    navText: ["@","&"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});




});



// WoW JS
new WOW().init();
