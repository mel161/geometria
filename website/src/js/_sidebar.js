/* global $ */
$(document).ready(() => {
  let topNav = $('.nav--top');
  let sidebar = $('.sidebar');
  let sidebarInner = $('.sidebar__inner');
  let topPanelInner = $('.top-panel').find('.col--center');

  $('#js-sidebar-trigger').click(function () {
    $(this).toggleClass('btn--active');
    sidebar.toggleClass('sidebar--active');
  });

  let resizing = false;

  function checkMQ() {
    let dw = $('.page').outerWidth();

    if (dw >= 1200) {
      return 'desktop';
    }
    return 'mobile';
  }

  function detachElements() {
    topNav.detach();
  }

  function moveElements() {
    let mq = checkMQ();
    // var dw = $('.page').outerWidth()

    if (mq === 'mobile') {
      detachElements();
      topNav.prependTo(sidebarInner);
    } else if (mq === 'desktop') {
      detachElements();
      topNav.prependTo(topPanelInner);
    }
    // checkSelected(mq);
    resizing = false;
  }

  moveElements();
  $(window).on('resize', () => {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(moveElements, 300)
        : window.requestAnimationFrame(moveElements);
      resizing = true;
    }
  });
});
