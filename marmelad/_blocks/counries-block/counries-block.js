if ($('.counries-block').length) {
   var countrySliderCount = 0;
    $('.counries-block').each(function(e){
        var topSlider = $(this).find('.counries-block__list-top');
        var bottomSlider = $(this).find('.counries-block__list-bottom');

        $(this).find('.counries-block__list-body').addClass('swiper-wrapper');
        $(this).find('.counries-block__item').addClass('swiper-slide');
        topSlider.addClass('swiper swiperCountryTop' + countrySliderCount);
        bottomSlider.addClass('swiper swiperCountryBottom' + countrySliderCount);

        var topCountry = new Swiper(".swiperCountryTop" + countrySliderCount, {
            allowTouchMove: false,
            slidesPerView: 'auto',
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            loop: true,
            speed: 3000,
            freeMode: 1,
        });
        var bottomCountry = new Swiper(".swiperCountryBottom" + countrySliderCount,{
            allowTouchMove: false,
            slidesPerView: 'auto',
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            loop: true,
            speed: 3000,
            freeMode: 1,
        })

        countrySliderCount += 1;
    });
}
