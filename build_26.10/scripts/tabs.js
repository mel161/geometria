/* global $ */
$('.link--tab').click(function (event) {
  event.preventDefault()
  $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
  var tabName = $(this).attr('href')
  $(tabName).addClass('tab__item--active').siblings().removeClass('tab__item--active')
})
