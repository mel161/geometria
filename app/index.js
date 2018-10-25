/* global $ */
/* global jQuery */

import 'smartscroll'

import './styles/main.scss'

import 'jquery.scrollbar'

import './scripts/_scroll'
import './scripts/_sidebar'

import mapInit from './scripts/_map'

if (process.env.NODE_ENV !== 'production') {
  require('./index.pug')
}

jQuery(document).ready(() => {
  /* global ymaps */
  ymaps.ready(mapInit)

  $('.link--tab').click(function (event) {
    event.preventDefault()
    $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    let tab = $(this).attr('href')
    $(tab).addClass('tab__item--active').siblings().removeClass('tab__item--active')
  })

  $('#js-map-nav-toggle').click(function () {
    $(this).toggleClass('btn--active')
    $('#js-map-nav').toggleClass('nav__list--visible')
  })
})
