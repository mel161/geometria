// /* global $ */
/* global jQuery */

import '../scripts/_sidebar'
import '../scripts/_scroll'
import '../scripts/_form'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./documents.pug')
}

jQuery(document).ready(() => {
})
