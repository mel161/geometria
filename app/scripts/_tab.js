/* global $ */

$('.link--tab').click(function (event) {
  event.preventDefault()
  $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
  let tab = $(this).attr('href')
  $(tab).addClass('tab__item--active').siblings().removeClass('tab__item--active')
})
