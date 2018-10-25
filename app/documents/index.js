/* global $ */
/* global jQuery */

import 'smartscroll'

import 'jquery.scrollbar'

import '../scripts/_sidebar'
import '../scripts/_scroll'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./documents.pug')
}

jQuery(document).ready(() => {
  $('.scrollbar-rail').scrollbar()
})
