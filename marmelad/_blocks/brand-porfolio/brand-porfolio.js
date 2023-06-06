if ($('.brand-porfolio').length) {
   var brandSliderCount = 'brndSlider0';
    $('.brand-porfolio').each(function(e){
        var topSlider = $(this).find('.brand-porfolio__top-slider');
        var bottomSlider = $(this).find('.brand-porfolio__bottom-slider');
        var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + brandSliderCount +'"></div></div>');

        topSlider.addClass('swiperBrandTop' + brandSliderCount);
        bottomSlider.addClass('swiperBrandBottom' + brandSliderCount);
        swiperScroll.appendTo(bottomSlider);

        var topBrand = new Swiper(".swiperBrandTop" + brandSliderCount, {
            allowTouchMove: false,
            speed: 600,
            slidesPerView: 3,
            freeMode: true,
            spaceBetween: 10,
            breakpoints: {
                768: {
                  slidesPerView: 4
                }
            }
        });
        var bottomBrand = new Swiper(".swiperBrandBottom" + brandSliderCount,{
            autoplay: {
                delay: 4e3
            },
            speed: 600,
            slidesPerView: 2,
            freeMode: 1,
            spaceBetween: 10,
            scrollbar: {
                el: ".swiper-scrollbar" + brandSliderCount,
                draggable: 1
            },
            mousewheel: 1,
            controller: {
                control: [topBrand],
                inverse: 1
            },
            breakpoints: {
                768: {
                  slidesPerView: 3
                }
            }
        })

        brandSliderCount += 1;
    });
}
