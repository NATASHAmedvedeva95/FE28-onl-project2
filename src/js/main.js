let hamburger =  document.querySelector('.hamburger');
let navMenu =  document.querySelector('.nav_menu');
let text = document.querySelector('.text');



hamburger.addEventListener('click', mobileMenu);


function mobileMenu () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    text.classList.toggle('active');
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		speed:1000,
		autoplaySpeed:800,

	});
});
