/* global $ */
import 'smartscroll'

import 'jquery.scrollbar'
import 'page-scroll-to-id'
// import EventEmitter from './vendor/EventEmitter.min'
// import './vendor/lethargy.min'

/* global EventEmitter */
let ee = new EventEmitter()

$(document).ready(() => {
  var resizing = false

  $(".nav__item--submenu .link--nav[href*='#']").mPageScroll2id()
  $('.nav__item--submenu .link--nav').click(function (event) {
    var mq = checkMQ()
    if (mq === 'mobile') {
      $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    }
  })

  if ($('.wrap').is('.scrollbar-rail')) {
    $('.scrollbar-rail').scrollbar()
  }

  scrollInit()
  /* eslint no-console: 1 */
  $(window).on('resize', function () {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(scrollInit, 300)
        : window.requestAnimationFrame(scrollInit)
      resizing = true
    }
  })

  function checkMQ () {
    var dw = $('.page').outerWidth()

    if (dw >= 1200) {
      return 'desktop'
    } else {
      return 'mobile'
    }
  }

  function scrollInit () {
    var mq = checkMQ()

    if (mq !== 'mobile') {
      $.smartscroll({
        autoHash: false,
        sectionScroll: true,
        sectionWrapperSelector: '.main',
        sectionClass: 'slide',
        eventEmitter: ee,
        bindSwipe: true
      })
    } else {
      var rafTimer

      window.onscroll = function (event) {
        cancelAnimationFrame(rafTimer)
        rafTimer = requestAnimationFrame(toggleHeaderFloating)
      }
    }
    resizing = false
  }
  var subnav = $('.nav--submenu-first')
  function toggleHeaderFloating () {
    if (window.scrollY > 140) {
      subnav.addClass('nav--subheader-sticky')
    } else {
      subnav.removeClass('nav--subheader-sticky')
    }
  }
})
