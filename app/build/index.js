/* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./build.pug')
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

  $('.link--tab').click(function (event) {
    event.preventDefault()
    $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    let tab = $(this).attr('href')
    $(tab).addClass('tab__inner--active').siblings().removeClass('tab__inner--active')
  })
})
