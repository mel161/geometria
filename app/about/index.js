/* global $ */
/* global jQuery */

import 'smartscroll'

import '../scripts/_sidebar'
import '../scripts/_scroll'

import 'jquery.scrollbar'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./about.pug')
}
// /* global EventEmitter */
// let ee = new EventEmitter()

jQuery(document).ready(() => {
  $('.card').click(function (event) {
    event.preventDefault()

    $(this).toggleClass('card--active')

    $(this).parent().toggleClass('list__item--card-active').siblings().removeClass('list__item--card-active').find('.card').removeClass('card--active')
  })

  $('.scrollbar-rail').scrollbar()
})
