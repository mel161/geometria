/* global $ */
/* global jQuery */

import 'smartscroll'

import 'jquery.scrollbar'

import 'jquery-mask-plugin'
import 'jquery-validation'

import 'jquery-modal'

import '../scripts/_sidebar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./buy.pug')
}

// /* global EventEmitter */
// let ee = new EventEmitter()

jQuery(document).ready(() => {
  // $.smartscroll({
  //   autoHash: false,
  //   sectionScroll: true,
  //   sectionWrapperSelector: '.page',
  //   sectionClass: 'slide',
  //   eventEmitter: ee,
  //   bindSwipe: true
  // })

  $('.card__info').hover(function () {
    $(this)
      .parent()
      .next('.card__back')
      .toggleClass('card__back--hover')
  })

  $('.scrollbar-rail').scrollbar()

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
    submitHandler: function (form) {
      $('#js-modal-success').modal()
    }
  })

  $('.input').on('blur keyup', function () {
    if ($('.form').valid()) {
      $('#js-form-submit').prop('disabled', false)
    } else {
      $('#js-form-submit').prop('disabled', 'disabled')
    }
  })

  jQuery.extend(jQuery.validator.messages, {
    required: 'Поле должно быть заполнено.'
  })
  //

  $('#js-modal-success').on($.modal.BEFORE_CLOSE, function (event, modal) {
    $('.btn--order').attr('href', '#js-modal-success')
  })
})
