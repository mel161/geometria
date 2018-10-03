import 'smartscroll';





jQuery(document).ready(function() {

  // Tabs
  $(".link--tab").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("nav__item--active").siblings().removeClass("nav__item--active");
    var tab = $(this).attr("href");
    $(tab).addClass("tab__inner--active").siblings().removeClass("tab__inner--active");
  });
  // Tabs End

  // Smartscroll
  var ee = new EventEmitter();
  $.smartscroll({
    autoHash: false,
    sectionScroll: true,
    sectionWrapperSelector: ".main",
    sectionClass: "slide",
    eventEmitter: ee
  });
  // Smartscroll End

});

// Maps
import init from './_map.js';
ymaps.ready(init);
