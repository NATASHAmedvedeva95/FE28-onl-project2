let hamburger =  document.querySelector('.hamburger');
let navMenu =  document.querySelector('.nav_menu');
let text = document.querySelector('.text');



hamburger.addEventListener('click', mobileMenu);


function mobileMenu () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    text.classList.toggle('active');
}