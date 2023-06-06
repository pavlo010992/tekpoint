if ($('.reviews-block').length) {
   var reviewsSliderCount = 0;
    $('.reviews-block').each(function(e){
        var slider = $(this).find('.reviews-block__slider');
        var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + reviewsSliderCount +'"></div></div>');
        var height = $(this).find('.reviews-block__list').height() + 10;

        $(this).find('.reviews-block__list').css('height', height);
        slider.addClass('swiperReviews' + reviewsSliderCount);
        swiperScroll.appendTo(slider);

        var slider = new Swiper(".swiperReviews" + reviewsSliderCount,{
            autoplay: false,
            speed: 800,
            slidesPerView: 1,
            freeMode: 1,
            spaceBetween: 20,
            scrollbar: {
                el: ".swiper-scrollbar" + reviewsSliderCount,
                draggable: 1
            },
            mousewheel: 1,
            breakpoints: {
                768: {
                  initialSlide: 1
                }
            }
        })

        $(document).on('click', '.reviews-block__item', function(e){
          e.preventDefault();
          var index = $(this).index();
          slider.slideTo(index);
        });
        reviewsSliderCount += 1;
    });

    $(window).on('resize', function(e){
        $('.reviews-block').each(function(e){
            $(this).find('.reviews-block__list').css('height', '');
            var height = $(this).find('.reviews-block__list').height() + 10;

            $(this).find('.reviews-block__list').css('height', height);
        });

    });
}
