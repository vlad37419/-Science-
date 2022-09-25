document.addEventListener("DOMContentLoaded", function () {
    let body = document.querySelector('body');

    // promo slider
    const promoSlider = new Swiper('.promo__slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        touchRatio: false,
        autoHeight: true,

        navigation: {
            nextEl: '.promo__slider-button_next',
            prevEl: '.promo__slider-button_prev',
        },
    });
});