/* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./buy.pug')
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

  $('.card__info').hover(function () {
    $(this)
      .parent()
      .next('.card__back')
      .toggleClass('card__back--hover')
  })
})
