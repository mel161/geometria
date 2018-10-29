/* global $ */
import './vendor/jquery.min'

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
