// import EventEmitter from './_EventEmitter.min.js';
// import lethargy from './_lethargy.min.js';

import * as jQuery from './secondary.js';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

import 'smartscroll';

import '@fancyapps/fancybox';

// $('[data-fancybox="gallery"]').fancybox({
// 	// Options will go here
//   baseClass: "slideGallery"
// });

// import '@staaky/strip/dist/js/strip.pkgd.js'

jQuery(document).ready(function() {

  // Tabs
  $(".link--tab").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("nav__item--active").siblings().removeClass("nav__item--active");
    var tab = $(this).attr("href");
    $(tab).addClass("tab__inner--active").siblings().removeClass("tab__inner--active");
  });
  // Tabs End

  // Smartscroll
  var ee = new EventEmitter();
  var scrollStartListener = function(slideNumber) {
    console.log("Scrolling to " + slideNumber);
    if (slideNumber === 2) {
      $('.sidebar').removeClass('sidebar--active');
      $('.nav__item--top').addClass('nav__item--top-scroll');
      $('#svg-figure').attr('stroke', '#323232');
      $('#svg-text').attr('fill', '#323232');
    } else if (slideNumber === 3) {
      $('.sidebar').removeClass('sidebar--active');
      $('.nav__item--top').addClass('nav__item--top-scroll');
      $('#svg-figure').attr('stroke', '#fff');
      $('#svg-text').attr('fill', '#fff');
    } else if (slideNumber === 4) {
      $('.sidebar').removeClass('sidebar--active');
      $('.nav__item--top').addClass('nav__item--top-scroll');
      $('#svg-figure').attr('stroke', '#323232');
      $('#svg-text').attr('fill', '#323232');
    } else if (slideNumber > 4) {
      $('.sidebar').removeClass('sidebar--active');
      $('.nav__item--top').addClass('nav__item--top-scroll');
    } else {
      $('.sidebar').addClass('sidebar--active');
      $('.nav__item--top').removeClass('nav__item--top-scroll');
      $('#svg-figure').attr('stroke', '#fff');
      $('#svg-text').attr('fill', '#fff');
    }

    // if (slideNumber > 1) {
    //   $('.sidebar').removeClass('sidebar--active');
    //   $('#svg-figure').attr('stroke', '#323232');
    //   $('#svg-text').attr('fill', '#323232');
    // } else if (slideNumber === 3) {
    //   $('#svg-figure').attr('stroke', '#fff');
    //   $('#svg-text').attr('fill', '#fff');
    // } else {
    //   $('.sidebar').addClass('sidebar--active');
    //   $('#svg-figure').attr('stroke', '#fff');
    //   $('#svg-text').attr('fill', '#fff');
    // }
  }
  var scrollEndListener = function(slideNumber) {
    console.log("Scrolling End");
  }
  ee.addListener('scrollStart', scrollStartListener);
  ee.addListener('scrollEnd', scrollEndListener);

  $.smartscroll({
    autoHash: false,
    sectionScroll: true,
    sectionWrapperSelector: ".main",
    sectionClass: "slide",
    eventEmitter: ee,
    bindSwipe: true
  });

  // Smartscroll End

});

// Maps
import init from './_map.js';
ymaps.ready(init);
