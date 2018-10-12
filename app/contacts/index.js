/* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'

import 'jquery-mask-plugin'
import 'jquery-validation'

import mapInit from './../scripts/_map-contacts'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./contacts.pug')
}
/* global EventEmitter */
let ee = new EventEmitter()

jQuery(document).ready(() => {
  $.smartscroll({
    autoHash: false,
    sectionScroll: true,
    sectionWrapperSelector: '.page',
    sectionClass: 'slide',
    eventEmitter: ee,
    bindSwipe: true
  })
  $('.input--phone').mask('+7(999) 999 99-99')

  //  Form
  $('.form').validate({
    element: '.input__text',
    errorClass: 'input--error',
    validClass: 'input--valid',
    errorElement: 'span',
    submitHandler: function (form) {

    }
  })

  $('.input').on('blur keyup', function () {
    if ($('.form').valid()) {
      $('#js-form-submit').prop('disabled', false)
    } else {
      $('#js-form-submit').prop('disabled', 'disabled')
    }
  })

  jQuery.extend(jQuery.validator.messages, {required: 'Поле должно быть заполнено.'})
  //

  // Map
  /* global ymaps */
  ymaps.ready(mapInit)
})
