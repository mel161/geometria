/* global $ */
/* global jQuery */

import './scripts/_common'
import './scripts/_tab'
import './scripts/_gallery'

import mapInit from './scripts/_map'

import './styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./index.pug')
}

jQuery(document).ready(() => {
  /* global ymaps */
  ymaps.ready(mapInit)

  $('#js-map-nav-toggle').click(function () {
    $(this).toggleClass('btn--active')
    $('#js-map-nav').toggleClass('nav__list--visible')
  })
})
