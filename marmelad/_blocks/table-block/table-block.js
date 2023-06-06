$('.table-block__table-row-name').on('click', function(e){
  e.preventDefault();
  if (window.matchMedia('(max-width:1023px)').matches) {
    $(this).closest('.table-block__table-row').toggleClass('opened');
    $(this).closest('.table-block__table-row').find('.table-block__table-row-content').slideToggle();
  }
});
$('.table-block__table-row').on('click', function(e){
  e.preventDefault();
  if (window.matchMedia('(min-width:1024px)').matches) {
    $(this).toggleClass('opened');
    $(this).find('.table-block__table-row-value').slideToggle();
  }
});
