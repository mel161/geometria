/* global $ */
/* global EventEmitter */
/* global Strip */
// import './vendor/jquery.min'

// import EventEmitter from './vendor/EventEmitter.min'
// import './vendor/lethargy.min'
import 'smartscroll'
// import './vendor/smartscroll.min'
import 'page-scroll-to-id'
// import './vendor/jquery.malihu.PageScroll2id'
import 'jquery.scrollbar'
// import './vendor/jquery.scrollbar.min'

let ee = new EventEmitter()

var scrollStartListenerIndex = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active')
  $('#js-sidebar-trigger').removeClass('btn--active')
  if (slideNumber <= 0 || slideNumber === 1) {
    $('.sidebar').addClass('sidebar--active')
    $('#js-sidebar-trigger').addClass('btn--active').addClass('btn--nav-trigger-white')
  } else if (slideNumber % 2 === 0 || slideNumber > 4) {
    $('#js-sidebar-trigger').removeClass('btn--nav-trigger-white')
    if (slideNumber === 2) {
      $('#js-sidebar-trigger').addClass('btn--nav-trigger-white')
    }
  } else if (slideNumber % 3 === 0) {
    // $('#js-sidebar-trigger').removeClass('btn--nav-trigger-white')
  } else {
    $('#js-sidebar-trigger').removeClass('btn--nav-trigger-white')
  }

  if ($('div').is('.strp-window')) {
    Strip.hide()
  }
}
var scrollStartListener = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active')
  $('#js-sidebar-trigger').removeClass('btn--active')

  if ($('div').is('.strp-window')) {
    Strip.hide()
  }
}

$(document).ready(() => {
  if ($('.main').is('.main--index')) {
    ee.addListener('scrollStart', scrollStartListenerIndex)
    $('.sidebar').addClass('sidebar--active')
    $('#js-sidebar-trigger').addClass('btn--active')
  } else {
    ee.addListener('scrollStart', scrollStartListener)
  }

  var resizing = false

  $('.nav__item--submenu .link--nav').click(function (event) {
    var mq = checkMQ()
    if (mq === 'mobile') {
      $(".nav__item--submenu .link--nav[href*='#']").mPageScroll2id({offset: 140})
      $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    } else {
      $(".nav__item--submenu .link--nav[href*='#']").mPageScroll2id()
    }
  })

  if ($('.wrap').is('.scrollbar-rail')) {
    $('.scrollbar-rail').scrollbar()
  }

  scrollInit()
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
        autoHash: true,
        sectionScroll: true,
        sectionWrapperSelector: '.main',
        sectionClass: 'slide',
        eventEmitter: ee,
        bindSwipe: true
      })

      if ($('.wrap').is('.scrollbar-rail')) {
        var dw = $('.page').outerWidth()
        var colLeftWidth = $('.scrollbar-rail').parent('.col--center').siblings('.col--left').outerWidth()
        $('.scrollbar-rail').width(dw - colLeftWidth - 10)
      }
    } else {
      $('.sidebar').removeClass('sidebar--active')
      $('#js-sidebar-trigger').removeClass('btn--active').removeClass('btn--nav-trigger-white')
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
    if (window.scrollY > 170) {
      subnav.addClass('nav--subheader-sticky')
    } else {
      subnav.removeClass('nav--subheader-sticky')
    }
  }
})
