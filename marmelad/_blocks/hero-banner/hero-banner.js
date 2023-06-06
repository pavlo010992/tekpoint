if ($('.hero-banner').length && $('.hero-banner__item').length > 1) {
  var $swiperWrapper = $('<div class="swiper"></div>');
  var $swiperPagination = $('<div class="swiper-pagination wow fadeInRight" data-wow-delay="100ms"></div>');
  $swiperWrapper.appendTo('.hero-banner');
  $('.hero-banner__list').appendTo('.hero-banner .swiper');
  $('.hero-banner__list').addClass('swiper-wrapper');
  $('.hero-banner__item').addClass('swiper-slide');
  $swiperPagination.appendTo('.hero-banner .swiper');

  var sliderBanner = new Swiper(".hero-banner .swiper", {
      freeMode: false,
      effect: "fade",
      autoplay: true,
      loop: true,
      fadeEffect: {
          crossFade: true
      },
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          var index = ((index + 1) < 10) ? '0' + (index + 1) : index + 1;
          return '<span class="' + className + '">' + index + "</span>";
        },
      }
    });
}
