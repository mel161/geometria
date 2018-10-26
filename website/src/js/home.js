import './_tab';

import mapInit from './_map';

jQuery(document).ready(() => {
  /* global ymaps */
  ymaps.ready(mapInit);

  $('#js-map-nav-toggle').click(function () {
    $(this).toggleClass('btn--active');
    $('#js-map-nav').toggleClass('nav__list--visible');
  });
});
