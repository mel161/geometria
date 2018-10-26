/* global $ */
/* global jQuery */
import 'jquery-mask-plugin';
import 'jquery-modal';
import 'jquery-validation';

window.$ = $;
window.jQuery = jQuery;

$(document).ready(() => {
  $('.modal__close').modal({ closeClass: '', closeText: '' });

  $('.input--phone').mask('+7(999) 999 99-99');

  //  Form
  $('.form').validate({
    element: '.input__text',
    errorClass: 'input--error',
    validClass: 'input--valid',
    errorElement: 'span',
    submitHandler(form) {
      $('#js-modal-success').modal();
    },
  });

  $('.input').on('blur keyup', () => {
    if ($('.form').valid()) {
      $('#js-form-submit').prop('disabled', false);
    } else {
      $('#js-form-submit').prop('disabled', 'disabled');
    }
  });

  jQuery.extend(jQuery.validator.messages, { required: 'Поле должно быть заполнено.' });
  // Form End

  $('#js-modal-success').on($.modal.BEFORE_CLOSE, (event, modal) => {
    $('.btn--order').attr('href', '#js-modal-success');
  });
});
