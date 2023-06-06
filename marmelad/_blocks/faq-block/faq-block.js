$('.faq-block__item-name').on('click', function(e){
  e.preventDefault();
  $(this).closest('.faq-block__item').toggleClass('opened');
  $(this).closest('.faq-block__item').find('.faq-block__item-body').slideToggle();
});
