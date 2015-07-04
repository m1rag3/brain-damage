$(document).ready(function() {

    $('.portfolio-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio-item-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    $('.portfolio-item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.portfolio-thumb-slider'
    });

});