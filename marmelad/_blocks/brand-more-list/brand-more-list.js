if ($('.brand-more-list').length) {
    function brandThumbsMaxHeigth($parrent){
        var brandThumbsMaxHeight1 = 0;
        var brandThumbsMaxHeight2 = 0;

        $parrent.find('.brand-more-list__item').css('height', '');
        $parrent.find('.brand-more-list__item').each(function(){
            var height = $(this).height();

            if (!$(this).index()%2 && height > brandThumbsMaxHeight1) {
                brandThumbsMaxHeight1 = height;
            }
            if ($(this).index()%2 && height > brandThumbsMaxHeight2) {
                brandThumbsMaxHeight2 = height;
            }
        });
        $parrent.find('.brand-more-list__item:first-child').css('height', brandThumbsMaxHeight1);
        $parrent.find('.brand-more-list__item:last-child').css('height', brandThumbsMaxHeight2);
    }

    $(window).on('resize', function(e){
      $('.brand-more-list').each(function(e){
          brandThumbsMaxHeigth($(this));
      });
    });

    var brandFullSliderCount = 0;
    $('.brand-more-list').each(function(e){
        var slider = $(this).find('.swiper');
        var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + brandFullSliderCount +'"></div></div>');

        slider.addClass('swiperFullBrand' + brandFullSliderCount);
        swiperScroll.appendTo(slider);

        var bottomBrand = new Swiper(".swiperFullBrand" + brandFullSliderCount,{
            autoplay: {
                delay: 4e3
            },
            speed: 600,
            slidesPerView: 1,
            freeMode: 1,
            spaceBetween: 20,
            scrollbar: {
                el: ".swiper-scrollbar" + brandFullSliderCount,
                draggable: 1
            },
            mousewheel: 1,
            breakpoints: {
                400: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
            }
        })
        brandThumbsMaxHeigth($(this));

        brandFullSliderCount += 1;
    });
}
