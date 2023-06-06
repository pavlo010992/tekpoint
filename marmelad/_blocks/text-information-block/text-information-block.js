if ($('.text-information-block__images').length) {
   var textInformationImagesSlider = 'sliderText0';
    $('.text-information-block__images').each(function(e){
        if ($(this).find('.text-information-block__images-item').length > 1) {
            var slider = $(this);
            var sliderWrap = $('<div class="swiper sliderText' + textInformationImagesSlider +'"></div>');
            var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + textInformationImagesSlider +'"></div></div>');

            sliderWrap.appendTo(slider);
            slider.find('.text-information-block__images-list').appendTo(slider.find('.swiper'));
            slider.find('.text-information-block__images-item').addClass('swiper-slide');
            slider.find('.text-information-block__images-list').addClass('swiper-wrapper');
            swiperScroll.appendTo(slider);

            var sliderText = new Swiper(".sliderText" + textInformationImagesSlider,{
                speed: 600,
                slidesPerView: 1,
                freeMode: 0,
                spaceBetween: 0,
                scrollbar: {
                    el: ".swiper-scrollbar" + textInformationImagesSlider,
                    draggable: 1
                },
                mousewheel: 1
            })
            textInformationImagesSlider += 1;
        }
    });

}
