document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#secondary-slider', {
		rewind    : true,
		gap       : 10,
		pagination: false,
	} ).mount();
} );