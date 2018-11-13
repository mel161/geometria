/* global $ */
/* global jQuery */

import 'jquery-mask-plugin'
// import './vendor/jquery.mask.min'
import 'jquery-modal'
// import './vendor/jquery.modal.min'
import 'jquery-validation'
// import './vendor/jquery.validate.min'

$(document).ready(() => {
  $('.modal__close').modal({
    closeClass: '',
    closeText: ''
  })

  $('.input--phone').mask('+7(999) 999 99-99')

  //  Form
  $('.form').validate({
    element: '.input__text',
    errorClass: 'input--error',
    validClass: 'input--valid',
    errorElement: 'span',
    rules: {
      phone: {
        minlenghtphone: true,
        digits: false
      }
    },
    submitHandler: function (form) {
      $('#js-modal-success').modal()
    }
  })

  $('.input').on('blur keyup change', function () {
    if ($('.form').valid()) {
      $('#js-form-submit').prop('disabled', false)
    } else {
      $('#js-form-submit').prop('disabled', 'disabled')
    }
  })

  $.validator.addMethod(
    'regex',
    function (value, element, regexp) {
      var re = new RegExp(regexp)
      return this.optional(element) || re.test(value)
    },
    'поле содержит недопустимые символы'
  )

  $.validator.addMethod('minlenghtphone', function (value, element) {
    return value.replace(/\D+/g, '').length > 10
  },
  'Введите телефон полностью')

  $('.input--text[name="name"]').rules('add', {
    regex: '^[а-яА-ЯёЁa-zA-Z ]+$'
  })
  // $('.input--text[name="phone"]').rules('add', {
  //   regex: '^(+7){1}([0-9()]){5} ([0-9]){3} ([0-9-]){5}'
  // })

  jQuery.extend(jQuery.validator.messages, {
    required: 'Поле должно быть заполнено.'
  })
  //

  $('#js-modal-success').on($.modal.BEFORE_CLOSE, function (event, modal) {
    $('a[href="#js-modal-form"]').attr('href', '#js-modal-success')
  })
})
