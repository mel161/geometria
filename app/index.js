/* global $ */
/* global jQuery */

import 'smartscroll'

import './styles/main.scss'

import 'jquery.scrollbar'

// import './scripts/_scroll'
import './scripts/_sidebar'

import mapInit from './scripts/_map'

if (process.env.NODE_ENV !== 'production') {
  require('./index.pug')
}

// /* global EventEmitter */
// let ee = new EventEmitter()

// let scrollStartListener = function (slideNumber) {
//   if (slideNumber === 2) {
//     $('.sidebar').removeClass('sidebar--active')
//     $('.nav__item--top').addClass('nav__item--top-scroll')
//     $('#svg-figure').attr('stroke', '#323232')
//     $('#svg-text').attr('fill', '#323232')
//   } else if (slideNumber === 3) {
//     $('.sidebar').removeClass('sidebar--active')
//     $('.nav__item--top').addClass('nav__item--top-scroll')
//     $('#svg-figure').attr('stroke', '#fff')
//     $('#svg-text').attr('fill', '#fff')
//   } else if (slideNumber === 4) {
//     $('.sidebar').removeClass('sidebar--active')
//     $('.nav__item--top').addClass('nav__item--top-scroll')
//     $('#svg-figure').attr('stroke', '#323232')
//     $('#svg-text').attr('fill', '#323232')
//   } else if (slideNumber > 4) {
//     $('.sidebar').removeClass('sidebar--active')
//     $('.nav__item--top').addClass('nav__item--top-scroll')
//   } else {
//     $('.sidebar').addClass('sidebar--active')
//     $('.nav__item--top').removeClass('nav__item--top-scroll')
//     $('#svg-figure').attr('stroke', '#fff')
//     $('#svg-text').attr('fill', '#fff')
//   }
// }
//
// let scrollEndListener = function (slideNumber) {}
// ee.addListener('scrollStart', scrollStartListener)
// ee.addListener('scrollEnd', scrollEndListener)

jQuery(document).ready(() => {
  // $.smartscroll({
  //   autoHash: false,
  //   sectionScroll: true,
  //   sectionWrapperSelector: '.main',
  //   sectionClass: 'slide',
  //   eventEmitter: ee,
  //   bindSwipe: true
  // })

  /* global ymaps */
  ymaps.ready(mapInit)

  $('.link--tab').click(function (event) {
    event.preventDefault()
    $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    let tab = $(this).attr('href')
    $(tab).addClass('tab__item--active').siblings().removeClass('tab__item--active')
  })

  $('#js-map-nav-toggle').click(function () {
    $(this).toggleClass('btn--active')
    $('#js-map-nav').toggleClass('nav__list--visible')
  })

  $('.scrollbar-rail').scrollbar()
})
