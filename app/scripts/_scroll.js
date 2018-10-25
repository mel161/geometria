/* global $ */

import 'page-scroll-to-id'

/* global EventEmitter */
let ee = new EventEmitter()

$(document).ready(() => {
  var resizing = false

  $("a[href*='#']").mPageScroll2id()

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
