/* global $ */
/* global jQuery */

import 'smartscroll'

import 'slick-carousel'

import '../scripts/_sidebar'
import '../scripts/_scroll'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./build.pug')
}

jQuery(document).ready(() => {
  $('.link--tab').click(function (event) {
    event.preventDefault()
    $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    let tab = $(this).attr('href')
    $(tab).addClass('tab__item--active').siblings().removeClass('tab__item--active')
  })

  $('.list--years').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    infinite: false,
    prevArrow: "<button class='btn btn--transparent btn--prev slick-prev'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
    nextArrow: "<button class='btn btn--transparent btn--next slick-next'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>"
  })

  $('.slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    centerMode: true,
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
          centerPadding: '38px',
          slidesToShow: 1,
          vertical: false,
          useTransform: false,
          adaptiveHeight: true
        }
      }
    ]
  })
})
