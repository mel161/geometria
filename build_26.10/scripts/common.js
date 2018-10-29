/* global $ */
// SideBar
$(document).ready(function () {
  var topNav = $('.nav--top')
  var sidebar = $('.sidebar')
  var sidebarInner = $('.sidebar__inner')
  var topPanelInner = $('.top-panel').find('.col--center')

  $('#js-sidebar-trigger').click(function () {
    $(this).toggleClass('btn--active')
    sidebar.toggleClass('sidebar--active')
  })

  var resizing = false
  moveElements()
  $(window).on('resize', function () {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(moveElements, 300)
        : window.requestAnimationFrame(moveElements)
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

  function moveElements () {
    var mq = checkMQ()
    // var dw = $('.page').outerWidth()

    if (mq === 'mobile') {
      detachElements()
      topNav.prependTo(sidebarInner)
    } else if (mq === 'desktop') {
      detachElements()
      topNav.prependTo(topPanelInner)
    }
    // checkSelected(mq);
    resizing = false
  }

  function detachElements () {
    topNav.detach()
  }
})
// SideBar End
// Scroll
/* global EventEmitter */
var ee = new EventEmitter()

var scrollStartListenerIndex = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active')
  if (slideNumber === 0 && slideNumber === 1) {
    $('#svg-figure').css('stroke', '#fff')
    $('#svg-text').css('fill', '#fff')
    $('.nav__item--top').removeClass('nav__item--top-scroll')
  } else if (slideNumber % 2 === 0 || slideNumber > 4) {
    $('#svg-figure').css('stroke', '#323232')
    $('#svg-text').css('fill', '#323232')
    $('.nav__item--top').addClass('nav__item--top-scroll')
  } else if (slideNumber % 3 === 0) {
    $('#svg-figure').css('stroke', '#fff')
    $('#svg-text').css('fill', '#fff')
  } else {
    $('#svg-figure').css('stroke', '#fff')
    $('#svg-text').css('fill', '#fff')
    $('.nav__item--top').removeClass('nav__item--top-scroll')
  }
}

var scrollStartListener = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active')
}
var scrollEndListener = function () {}

if ($('.main').is('.main--index')) {
  ee.addListener('scrollStart', scrollStartListenerIndex)
} else {
  ee.addListener('scrollStart', scrollStartListener)
}
ee.addListener('scrollEnd', scrollEndListener)

$(document).ready(function () {
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
// Scroll End
// Form
$(document).ready(function () {
  $('.modal__close').modal({closeClass: '', closeText: ''})

  $('.input--phone').mask('+7(999) 999 99-99')

  //  Form
  $('.form').validate({
    element: '.input__text',
    errorClass: 'input--error',
    validClass: 'input--valid',
    errorElement: 'span',
    submitHandler: function (form) {
      $('#js-modal-success').modal()
    }
  })

  $('.input').on('blur keyup', function () {
    if ($('.form').valid()) {
      $('#js-form-submit').prop('disabled', false)
    } else {
      $('#js-form-submit').prop('disabled', 'disabled')
    }
  })

  $.extend($.validator.messages, {required: 'Поле должно быть заполнено.'})
  //

  $('#js-modal-success').on($.modal.BEFORE_CLOSE, function (event, modal) {
    $('.btn--order').attr('href', '#js-modal-success')
  })
})
// Form End
