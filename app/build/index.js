/* global $ */

import '../scripts/_common'
import '../scripts/_tab'

import 'slick-carousel'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./build.pug')
}

$(document).ready(() => {
  var resizing = false

  scrollInit()
  // slide: '.slider__item',

  $('.slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    rows: 0,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '36px',
    mobileFirst: true,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: "<button class='btn btn--base btn--prev slick-prev'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
    nextArrow: "<button class='btn btn--base btn--next slick-next'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '150px',
          vertical: true,
          useTransform: true,
          cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          vertical: false,
          useTransform: false,
          adaptiveHeight: true
        }
      }
    ]
  })

  $('.link--years').click(function (event) {
    event.preventDefault()
    if ($(this).parent().hasClass('is-active')) {
      $('.list--years').find('.is-active').removeClass('is-active')
      $('.slider').slick('slickUnfilter')
    } else {
      let gallerySelect = '.' + $(this).attr('href')
      $('.list--years').find('.is-active').removeClass('is-active')
      $(this).parent().addClass('is-active')
      $('.slider').slick('slickUnfilter')
      $('.slider').slick('slickFilter', gallerySelect)
    }
  })

  /* eslint no-console: 1 */
  $(window).on('resize', function () {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(scrollInit, 300)
        : window.requestAnimationFrame(scrollInit)
      resizing = true
    }
  })

  // function checkMQ () {
  //   var dw = $('.page').outerWidth()
  //   if (dw >= 1600) {
  //     return 'desktop'
  //   } else {
  //     return 'mobile'
  //   }
  // }

  function scrollInit () {
    // var mq = checkMQ()

    var dw = $('.page').outerWidth()

    if (dw >= 1620) {
      $('.slick-next').css('top', $('.slick-initialized').height() - 45 + 'px')
    } else {
      $('.list--years').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        rows: 0,
        infinite: false,
        prevArrow: "<button class='btn btn--transparent btn--prev slick-prev'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
        nextArrow: "<button class='btn btn--transparent btn--next slick-next'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>"
      })
    }
    resizing = false
  }
})
