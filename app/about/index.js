/* global $ */
/* global jQuery */

import '../scripts/_sidebar'
import '../scripts/_scroll'
import '../scripts/_form'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./about.pug')
}

jQuery(document).ready(() => {
  $('.card').click(function (event) {
    event.preventDefault()

    $(this).toggleClass('card--active')

    $(this).parent().toggleClass('list__item--card-active').siblings().removeClass('list__item--card-active').find('.card').removeClass('card--active')
  })
})
