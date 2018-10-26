/* global $ */
/* global jQuery */

import '../scripts/_common'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./buy.pug')
}

jQuery(document).ready(() => {
  $('.card__info').hover(function () {
    $(this)
      .parent()
      .next('.card__back')
      .toggleClass('card__back--hover')
  })
})
