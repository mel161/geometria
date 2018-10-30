/* global $ */
/* global jQuery */

import '../scripts/_common'
import '../scripts/_gallery'

import mapInit from './../scripts/_map-contacts'
import mapBigInit from './../scripts/_map-contacts-2'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./contacts.pug')
}

jQuery(document).ready(() => {
  // Map
  /* global ymaps */
  ymaps.ready(mapInit)

  $('.strp-window').prepend("<div id='map-big' style='width:1260px; height:100%; z-index: 50;'></div>")

  ymaps.ready(mapBigInit)
})
