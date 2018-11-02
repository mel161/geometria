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
  var cardWidth = obj.siblings().find('.card__inner').outerWidth()
  console.log(cardWidth)

  obj.find('.card__title').outerWidth(cardWidth)
  obj.find('.card__text').css('left', cardWidth + 'px')
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
  var activeCard
  $('.card').click(function (event) {
    event.preventDefault()
    var mq = checkMQ()
    if (mq === 'mobile') {
      activeCard = $(this)
      $(this).find('.card__inner').detach().prependTo($('.modal--card').find('.modal__inner'))
      $('#js-modal-card').modal()
    } else {
      cardActive($(this))
      cardListActive($(this).parent())
    }
  })

  let urlBase = window.location.href
  let hashPosition = urlBase.search('#')
  let idBlock = urlBase.slice(hashPosition)
  let idParent = '#' + $(idBlock).parents('.section').attr('id')

  if (hashPosition > 0) {
    var mq = checkMQ()
    if (mq === 'mobile') {
      activeCard = $($(idBlock).find('.card'))
      $($(idBlock)
        .find('.card'))
        .find('.card__inner')
        .detach()
        .prependTo($('.modal--card').find('.modal__inner'))
      $('#js-modal-card').modal()
    } else {
      $('html, body').animate({ scrollTop: $(idParent).offset().top }, 1000)
      cardActive($(idBlock).find('.card'))
      cardListActive($(idBlock))
    }
  }

  $('#js-modal-card').on($.modal.BEFORE_CLOSE, function (event, modal) {
    $('.modal--card').find('.card__inner').detach().prependTo(activeCard)
  })
})
