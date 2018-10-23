/* global $ */

/* global EventEmitter */
let ee = new EventEmitter()

$(document).ready(() => {
  var resizing = false

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
    }
    resizing = false
  }
})
