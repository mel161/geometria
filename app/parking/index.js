// /* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'
import '../scripts/_scroll'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./parking.pug')
}

jQuery(document).ready(() => {
})
