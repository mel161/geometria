// /* global $ */
/* global jQuery */

import '../scripts/_common'
import '../scripts/_gallery'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./parking.pug')
}

jQuery(document).ready(() => {
})
