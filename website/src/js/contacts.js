import mapInit from './_map-contacts';
import mapBigInit from './_map-contacts-2';

jQuery(document).ready(() => {
  // Map
  /* global ymaps */
  ymaps.ready(mapInit);

  $('.strp-window').prepend("<div id='map-big' style='width:1260px; height:100%; z-index: 50;'></div>");

  ymaps.ready(mapBigInit);
});
