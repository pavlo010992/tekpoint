'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window

  });
  wow.init();

  if (window.location.host == 'cgroup.pro') {
    $('a').not('[href^="tel"]').not('[href^="mailto"]').each(function (e) {
      var href = $(this).attr('href');
      $(this).attr('href', 'https://cgroup.pro/webdev/vk/tekpoint' + href);
    });
  }

  $('.footer__contacts-title').on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(min-width:1024px)').matches) {
      return false;
    }

    $(this).toggleClass('opened');
    $(this).closest('.footer__contacts').find('.footer__contacts-body').slideToggle();
  });
  $('.footer__offices-title').on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(min-width:1024px)').matches) {
      return false;
    }

    $(this).toggleClass('opened');
    $(this).closest('.footer__offices').find('.footer__offices-body').slideToggle();
  });
  $('.footer__offices-item-name').on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(min-width:1024px)').matches) {
      return false;
    }

    $(this).toggleClass('opened');
    $(this).closest('.footer__offices-item').find('.footer__offices-item-body').slideToggle();
  });
  $('.header__language ul li a').on('click', function (e) {
    if ($(this).closest('li').hasClass('active')) {
      e.preventDefault();
      $('.header__language ul li').not('.active').slideToggle();
    } else {
      $('.header__language ul li').removeClass('active');
      $(this).closest('li').addClass('active');
      $('.header__language ul li').not('.active').slideUp(0);
    }
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest('.header__language').length) {
      return;
    }

    $('.header__language ul li').not('.active').slideUp(0);
  });

  if ($('.brand-more-list').length) {
    var brandThumbsMaxHeigth = function brandThumbsMaxHeigth($parrent) {
      var brandThumbsMaxHeight1 = 0;
      var brandThumbsMaxHeight2 = 0;
      $parrent.find('.brand-more-list__item').css('height', '');
      $parrent.find('.brand-more-list__item').each(function () {
        var height = $(this).height();

        if (!$(this).index() % 2 && height > brandThumbsMaxHeight1) {
          brandThumbsMaxHeight1 = height;
        }

        if ($(this).index() % 2 && height > brandThumbsMaxHeight2) {
          brandThumbsMaxHeight2 = height;
        }
      });
      $parrent.find('.brand-more-list__item:first-child').css('height', brandThumbsMaxHeight1);
      $parrent.find('.brand-more-list__item:last-child').css('height', brandThumbsMaxHeight2);
    };

    $(window).on('resize', function (e) {
      $('.brand-more-list').each(function (e) {
        brandThumbsMaxHeigth($(this));
      });
    });
    var brandFullSliderCount = 0;
    $('.brand-more-list').each(function (e) {
      var slider = $(this).find('.swiper');
      var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + brandFullSliderCount + '"></div></div>');
      slider.addClass('swiperFullBrand' + brandFullSliderCount);
      swiperScroll.appendTo(slider);
      var bottomBrand = new Swiper(".swiperFullBrand" + brandFullSliderCount, {
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
      });
      brandThumbsMaxHeigth($(this));
      brandFullSliderCount += 1;
    });
  }

  if ($('.brand-porfolio').length) {
    var brandSliderCount = 'brndSlider0';
    $('.brand-porfolio').each(function (e) {
      var topSlider = $(this).find('.brand-porfolio__top-slider');
      var bottomSlider = $(this).find('.brand-porfolio__bottom-slider');
      var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + brandSliderCount + '"></div></div>');
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
      var bottomBrand = new Swiper(".swiperBrandBottom" + brandSliderCount, {
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
      });
      brandSliderCount += 1;
    });
  }

  if ($('.counries-block').length) {
    var countrySliderCount = 0;
    $('.counries-block').each(function (e) {
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
        freeMode: 1
      });
      var bottomCountry = new Swiper(".swiperCountryBottom" + countrySliderCount, {
        allowTouchMove: false,
        slidesPerView: 'auto',
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        loop: true,
        speed: 3000,
        freeMode: 1
      });
      countrySliderCount += 1;
    });
  }

  $('.faq-block__item-name').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.faq-block__item').toggleClass('opened');
    $(this).closest('.faq-block__item').find('.faq-block__item-body').slideToggle();
  });

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
        renderBullet: function renderBullet(index, className) {
          var index = index + 1 < 10 ? '0' + (index + 1) : index + 1;
          return '<span class="' + className + '">' + index + "</span>";
        }
      }
    });
  }

  $('.mobile-menu__list > li.menu-item-has-children > a').on('click', function (e) {
    if (!$(this).closest('li').hasClass('opened')) {
      e.preventDefault();
      $(this).closest('li').addClass('opened');
      $(this).closest('li').find('> ul').slideDown();
    }
  });
  $('.header__burger-btn button, .mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').toggleClass('opened');
  });
  $('.mobile-menu').on('click', function (e) {
    if ($(e.target).closest('.mobile-menu__inner').length) {
      return;
    }

    $('.mobile-menu').removeClass('opened');
  });
  var doctorName = '';
  $('.doctors-thumbs__more a[data-remodal-target], .hero-inner-block [data-remodal-target]').on('click', function (e) {
    doctorName = $(this).closest('.doctors-thumbs').length ? $(this).closest('.doctors-thumbs').find('.doctors-thumbs__name').text() : $(this).closest('.hero-inner-block').find('.hero-inner-block__title').text();
    $('.remodal[data-remodal-id="modal-doctors"] input[name="doctorName"]').val(doctorName);
  });

  if ($('.reviews-block').length) {
    var reviewsSliderCount = 0;
    $('.reviews-block').each(function (e) {
      var slider = $(this).find('.reviews-block__slider');
      var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + reviewsSliderCount + '"></div></div>');
      var height = $(this).find('.reviews-block__list').height() + 10;
      $(this).find('.reviews-block__list').css('height', height);
      slider.addClass('swiperReviews' + reviewsSliderCount);
      swiperScroll.appendTo(slider);
      var slider = new Swiper(".swiperReviews" + reviewsSliderCount, {
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
      });
      $(document).on('click', '.reviews-block__item', function (e) {
        e.preventDefault();
        var index = $(this).index();
        slider.slideTo(index);
      });
      reviewsSliderCount += 1;
    });
    $(window).on('resize', function (e) {
      $('.reviews-block').each(function (e) {
        $(this).find('.reviews-block__list').css('height', '');
        var height = $(this).find('.reviews-block__list').height() + 10;
        $(this).find('.reviews-block__list').css('height', height);
      });
    });
  }

  $('.table-block__table-row-name').on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(max-width:1023px)').matches) {
      $(this).closest('.table-block__table-row').toggleClass('opened');
      $(this).closest('.table-block__table-row').find('.table-block__table-row-content').slideToggle();
    }
  });
  $('.table-block__table-row').on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(min-width:1024px)').matches) {
      $(this).toggleClass('opened');
      $(this).find('.table-block__table-row-value').slideToggle();
    }
  });

  if ($('.text-information-block__images').length) {
    var textInformationImagesSlider = 'sliderText0';
    $('.text-information-block__images').each(function (e) {
      if ($(this).find('.text-information-block__images-item').length > 1) {
        var slider = $(this);
        var sliderWrap = $('<div class="swiper sliderText' + textInformationImagesSlider + '"></div>');
        var swiperScroll = $('<div class="swiper-scrollbar-wrap"><div class="swiper-scrollbar swiper-scrollbar' + textInformationImagesSlider + '"></div></div>');
        sliderWrap.appendTo(slider);
        slider.find('.text-information-block__images-list').appendTo(slider.find('.swiper'));
        slider.find('.text-information-block__images-item').addClass('swiper-slide');
        slider.find('.text-information-block__images-list').addClass('swiper-wrapper');
        swiperScroll.appendTo(slider);
        var sliderText = new Swiper(".sliderText" + textInformationImagesSlider, {
          speed: 600,
          slidesPerView: 1,
          freeMode: 0,
          spaceBetween: 0,
          scrollbar: {
            el: ".swiper-scrollbar" + textInformationImagesSlider,
            draggable: 1
          },
          mousewheel: 1
        });
        textInformationImagesSlider += 1;
      }
    });
  }
});