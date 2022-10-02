document.addEventListener("DOMContentLoaded", function () {
    let body = document.querySelector('body');

    // Scroll to block
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            // const topOffset = document.querySelector('.scrollto').offsetHeight;
            const topOffset = 20;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

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

    // news slider
    const newsSlider = new Swiper('.news__slider', {
        touchRatio: false,
        autoHeight: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news__slider-button_next',
            prevEl: '.news__slider-button_prev',
        },
    });

    // awadrs slider
    let awardImgList = document.querySelectorAll('.award__img');

    const awadrsSlider = new Swiper('.awadrs__slider', {
        touchRatio: false,
        autoHeight: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.awadrs__slider-button_next',
            prevEl: '.awadrs__slider-button_prev',
        },
        pagination: {
            el: ".awadrs__slider-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<picture class="' + className + '">' + `<img src="${awardImgList[index].src}" alt="" style="border-radius: 5px; width: 100%; height: 100%; position: relative; z-index: 10;">` + "</picture>";
            },
        },
    });

    // btn back to top

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back-to-top_show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back-to-top_show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
});