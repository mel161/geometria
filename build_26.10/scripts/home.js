jQuery(document).ready(function () {
  /* global ymaps */
  ymaps.ready(init)

  $('#js-map-nav-toggle').click(function () {
    $(this).toggleClass('btn--active')
    $('#js-map-nav').toggleClass('nav__list--visible')
  })
})
