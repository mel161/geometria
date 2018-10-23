/* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./news.pug')
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

  $('.card').click(function (event) {
    event.preventDefault()

    $(this).toggleClass('card--active')

    $(this).parent().toggleClass('list__item--card-active').siblings().removeClass('list__item--card-active').find('.card').removeClass('card--active')
  })
})
