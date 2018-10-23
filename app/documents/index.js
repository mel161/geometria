/* global $ */
/* global jQuery */

import 'smartscroll'

import 'jquery.scrollbar'

import '../scripts/_sidebar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./documents.pug')
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

  $('.scrollbar-rail').scrollbar()
})
