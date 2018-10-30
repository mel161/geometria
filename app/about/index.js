/* global $ */
/* global jQuery */

import '../scripts/_common'

import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./about.pug')
}

function cardActive (obj) {
  obj.toggleClass('card--active')
    .find('.image--card').toggleClass('is-visible').toggleClass('is-hidden')
}

function cardListActive (obj) {
  obj
    .toggleClass('list__item--card-active')
    .siblings()
    .removeClass('list__item--card-active')
    .find('.card')
    .removeClass('card--active')
}

function checkMQ () {
  var dw = $('.page').outerWidth()

  if (dw >= 1200) {
    return 'desktop'
  } else {
    return 'mobile'
  }
}

jQuery(document).ready(() => {
  $('.card').click(function (event) {
    event.preventDefault()
    var mq = checkMQ()
    /* eslint no-console: 1 */
    console.log(mq)
    if (mq === 'mobile') {
      // $(this).detach().prependTo($('.wrap--about-card-scroll'))
      console.log($(this).parents('.scroll-wrapper')[0])
    } else {
      console.log(123)
    }

    cardActive($(this))
    cardListActive($(this).parent())
  })

  let urlBase = window.location.href
  let hashPosition = urlBase.search('#')
  let idBlock = urlBase.slice(hashPosition)

  cardActive($(idBlock).find('.card'))
  cardListActive($(idBlock))
})
