/* global $ */
/* global EventEmitter */
import './vendor/EventEmitter.min';
import './vendor/lethargy.min';

import 'smartscroll';

import 'jquery.scrollbar';
import 'page-scroll-to-id';

window.$ = $;
window.jQuery = jQuery;

let ee = new EventEmitter();

let scrollStartListenerIndex = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active');
  if (slideNumber === 0 && slideNumber === 1) {
    $('#svg-figure').css('stroke', '#fff');
    $('#svg-text').css('fill', '#fff');
    $('.nav__item--top').removeClass('nav__item--top-scroll');
  } else if (slideNumber % 2 === 0 || slideNumber > 4) {
    $('#svg-figure').css('stroke', '#323232');
    $('#svg-text').css('fill', '#323232');
    $('.nav__item--top').addClass('nav__item--top-scroll');
  } else if (slideNumber % 3 === 0) {
    $('#svg-figure').css('stroke', '#fff');
    $('#svg-text').css('fill', '#fff');
  } else {
    $('#svg-figure').css('stroke', '#fff');
    $('#svg-text').css('fill', '#fff');
    $('.nav__item--top').removeClass('nav__item--top-scroll');
  }
};

let scrollStartListener = function (slideNumber) {
  $('.sidebar').removeClass('sidebar--active');
};
let scrollEndListener = function () {};

if ($('.main').is('.main--index')) {
  ee.addListener('scrollStart', scrollStartListenerIndex);
} else {
  ee.addListener('scrollStart', scrollStartListener);
}
ee.addListener('scrollEnd', scrollEndListener);

$(document).ready(() => {
  let resizing = false;

  function checkMQ() {
    let dw = $('.page').outerWidth();

    if (dw >= 1200) {
      return 'desktop';
    }
    return 'mobile';
  }

  $(".nav__item--submenu .link--nav[href*='#']").mPageScroll2id();
  $('.nav__item--submenu .link--nav').click(function (event) {
    let mq = checkMQ();
    if (mq === 'mobile') {
      $(this).parent().addClass('nav__item--active').siblings()
        .removeClass('nav__item--active');
    }
  });

  if ($('.wrap').is('.scrollbar-rail')) {
    $('.scrollbar-rail').scrollbar();
  }

  let subnav = $('.nav--submenu-first');

  function toggleHeaderFloating() {
    if (window.scrollY > 140) {
      subnav.addClass('nav--subheader-sticky');
    } else {
      subnav.removeClass('nav--subheader-sticky');
    }
  }

  function scrollInit() {
    let mq = checkMQ();

    if (mq !== 'mobile') {
      $.smartscroll({
        autoHash: false,
        sectionScroll: true,
        sectionWrapperSelector: '.main',
        sectionClass: 'slide',
        eventEmitter: ee,
        bindSwipe: true,
      });
    } else {
      let rafTimer;

      window.onscroll = function (event) {
        cancelAnimationFrame(rafTimer);
        rafTimer = requestAnimationFrame(toggleHeaderFloating);
      };
    }
    resizing = false;
  }

  scrollInit();
  $(window).on('resize', () => {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(scrollInit, 300)
        : window.requestAnimationFrame(scrollInit);
      resizing = true;
    }
  });
});
