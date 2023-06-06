var doctorName = '';
$('.doctors-thumbs__more a[data-remodal-target], .hero-inner-block [data-remodal-target]').on('click', function(e){
  doctorName = ($(this).closest('.doctors-thumbs').length) ? $(this).closest('.doctors-thumbs').find('.doctors-thumbs__name').text() : $(this).closest('.hero-inner-block').find('.hero-inner-block__title').text();

  $('.remodal[data-remodal-id="modal-doctors"] input[name="doctorName"]').val(doctorName);
});
