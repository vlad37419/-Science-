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

    window.addEventListener('scroll', function (e) {
        let scrollDistance = window.scrollY;

        if (window.innerWidth > 768) {
            document.querySelectorAll('.scroll-to-block_js').forEach((el, i) => {
                if (el.offsetTop - 20 <= scrollDistance) {
                    document.querySelectorAll('a[href^="#"').forEach((el) => {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                        }
                    });

                    document.querySelectorAll('.side-menu .side-menu__item')[i].querySelector('a[href^="#"').classList.add('active');
                }
            });
        }
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
        slidesPerView: 3.1428,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news__slider-button_next',
            prevEl: '.news__slider-button_prev',
        },
    });

    // awards slider
    let awardImgList = document.querySelectorAll('.award__img');

    const awardsSlider = new Swiper('.awards__slider', {
        touchRatio: false,
        autoHeight: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.awards__slider-button_next',
            prevEl: '.awards__slider-button_prev',
        },
        pagination: {
            el: ".awards__slider-pagination",
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

    // More categories btn
    let moreBtnsList = document.querySelectorAll('.categories-more__name');

    for (let i = 0; i < moreBtnsList.length; i += 1) {
        const currentBtnMore = moreBtnsList[i];
        const currentBtnMoreParent = currentBtnMore.closest('.categories-more');

        currentBtnMore.addEventListener('click', function () {
            if (currentBtnMoreParent.classList.contains('active')) {
                currentBtnMoreParent.classList.remove('active');
            } else {
                document.querySelectorAll('.categories-more').forEach(function (elem) {
                    elem.classList.remove('active');
                });

                currentBtnMoreParent.classList.add('active');
            }
        });

        window.addEventListener('click', function (e) {
            const target = e.target;
            if (!target.closest('.categories-more')) {
                currentBtnMoreParent.classList.remove('active');
            }
        });
    }

    // Cards slider
    const cardsSlider = new Swiper('.cards-slider', {
        touchRatio: false,
        spaceBetween: 40,
        slidesPerView: 3,
    });
});