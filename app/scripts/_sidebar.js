/* global $ */

$('#js-sidebar-trigger').click(function () {
  $(this).toggleClass('btn--active')
  $('.sidebar').toggleClass('sidebar--active')
})
