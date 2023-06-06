$('.mobile-menu__list > li.hasChild > a').on('click', function(e){
  if (!$(this).closest('li').hasClass('opened')) {
    e.preventDefault();
    $(this).closest('li').addClass('opened');
    $(this).closest('li').find('> ul').slideDown();
  }
});
$('.header__burger-btn button, .mobile-menu__close').on('click', function(e){
  e.preventDefault();

  $('.mobile-menu').toggleClass('opened');
});

$('.mobile-menu').on('click', function(e){
  if ($(e.target).closest('.mobile-menu__inner').length) {
    return;
  }
  $('.mobile-menu').removeClass('opened');
});
