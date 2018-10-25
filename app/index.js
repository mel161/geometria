/* global $ */
/* global jQuery */

import './styles/main.scss'

import './scripts/_scroll'
import './scripts/_sidebar'
import './scripts/_tab'
import './scripts/_form'

import mapInit from './scripts/_map'

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
