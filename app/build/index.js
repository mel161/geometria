/* global $ */
/* global jQuery */

import 'smartscroll'

import 'slick-carousel'

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

  $('.slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '150px',
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: false
  })
})
