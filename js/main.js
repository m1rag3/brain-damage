$('.portfolio-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.portfolio-thumb-slider'
});

$('.portfolio-thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.portfolio-item-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});