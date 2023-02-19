$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});

menuBtn = document.querySelector('.menu-btn');
nav = document.querySelector('nav');
lineOne = document.querySelector('nav .menu-btn .line--1');
lineTwo = document.querySelector('nav .menu-btn .line--2');
lineThree = document.querySelector('nav .menu-btn .line--3');
link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})