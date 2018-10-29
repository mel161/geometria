/* global $ */
/* global EventEmitter */
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
  if (slideNumber <= 0 || slideNumber === 1) {
    $('.logo--top').removeClass('logo--top-dark')
    $('.nav__item--top').removeClass('nav__item--top-scroll')
    $('.sidebar').addClass('sidebar--active')
  } else if (slideNumber % 2 === 0 || slideNumber > 4) {
    $('.logo--top').addClass('logo--top-dark')
    $('.nav__item--top').addClass('nav__item--top-scroll')
  } else if (slideNumber % 3 === 0) {
    $('.logo--top').removeClass('logo--top-dark')
  } else {
    $('.logo--top').removeClass('logo--top-dark')
    $('.nav__item--top').removeClass('nav__item--top-scroll')
  }
}

var scrollStartListener = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active')
}

$(document).ready(() => {
  if ($('.main').is('.main--index')) {
    ee.addListener('scrollStart', scrollStartListenerIndex)
    $('.sidebar').addClass('sidebar--active')
  } else {
    ee.addListener('scrollStart', scrollStartListener)
  }

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
