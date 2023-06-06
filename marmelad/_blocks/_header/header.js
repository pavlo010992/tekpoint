$('.header__language ul li a').on('click', function(e){

  if ($(this).closest('li').hasClass('active')) {
    e.preventDefault();
    $('.header__language ul li').not('.active').slideToggle();
  } else {
    $('.header__language ul li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.header__language ul li').not('.active').slideUp(0);
  }
});

$(document).on('click', function(e){
  if ($(e.target).closest('.header__language').length) {
    return;
  }
  $('.header__language ul li').not('.active').slideUp(0);
});
