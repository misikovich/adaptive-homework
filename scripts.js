let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}

//slick
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        easing: 'ease-out',
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 700
    });
  });