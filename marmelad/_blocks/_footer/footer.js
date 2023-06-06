$('.footer__contacts-title').on('click', function(e){
  e.preventDefault();
  if (window.matchMedia('(min-width:1024px)').matches) {
    return false;
  }

  $(this).toggleClass('opened');
  $(this).closest('.footer__contacts').find('.footer__contacts-body').slideToggle();
});
$('.footer__offices-title').on('click', function(e){
  e.preventDefault();
  if (window.matchMedia('(min-width:1024px)').matches) {
    return false;
  }

  $(this).toggleClass('opened');
  $(this).closest('.footer__offices').find('.footer__offices-body').slideToggle();
});

$('.footer__offices-item-name').on('click', function(e){
  e.preventDefault();
  if (window.matchMedia('(min-width:1024px)').matches) {
    return false;
  }

  $(this).toggleClass('opened');
  $(this).closest('.footer__offices-item').find('.footer__offices-item-body').slideToggle();
});
