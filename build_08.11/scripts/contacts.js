(window.webpackJsonp = window.webpackJsonp || []).push([
  [8], { "3TRF": function(e, n, i) { "use strict";
      (function(e) { i("EfVy");
        n.a = function() { var n = new ymaps.Map("map", { center: [56.832403, 60.582798], zoom: 17, controls: [] }),
            i = new ymaps.Placemark([56.832403, 60.582798], {}, { iconLayout: "default#image", iconImageHref: "./images/point-home.png", iconImageSize: [60, 75], iconImageOffset: [-30, -75] });
          n.geoObjects.add(i), e(".map").click(function() { var i = e("#map-big"),
              o = e(".page").width() - e(".col--left").outerWidth() + "x" + e(".page").height();
            Strip.show("https://dummyimage.com/" + o + "+/000/fff", { maxWidth: 1260, onShow: function() { i.detach().appendTo(".strp-container"), n.container.fitToViewport() }, afterHide: function() { i.detach().appendTo(".strp-window"), n.container.fitToViewport() }, afterPosition: function(e) { n.container.fitToViewport() } }) }) } }).call(this, i("qIEf")) }, "4TRo": function(e, n, i) {
      (function(e) { e(document).ready(function(e) { e("div").is(".strp-close") && (e(".strp-close").empty().append('<svg class="icon icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38"><path fill-rule="evenodd" d="M36.117.261l2.121 2.121L2.883 37.738.761 35.617 36.117.261z"></path><path fill-rule="evenodd" d="M1.012 2.104L3.161.011l35.827 34.884-2.15 2.093L1.012 2.104z"></path></svg>'), e(".main").is(".main--contacts") && e(".strp-close .icon").addClass("icon--dark-grey")) }) }).call(this, i("qIEf")) }, Syeh: function(e, n, i) { "use strict";
      i("EfVy");
      n.a = function() { var e = new ymaps.Map("map-big", { center: [56.832403, 60.582798], zoom: 17, controls: [] }),
          n = new ymaps.Placemark([56.832403, 60.582798], {}, { iconLayout: "default#image", iconImageHref: "./images/point-home.png", iconImageSize: [60, 75], iconImageOffset: [-30, -75] });
        e.geoObjects.add(n) } }, W9W6: function(e, n, i) { "use strict";
      i.r(n),
        function(e, n) { i("ccr2"), i("4TRo"); var o = i("3TRF"),
            t = i("Syeh");
          i("WMMs");
          e(document).ready(function() { ymaps.ready(o.a), n(".strp-window").prepend("<div id='map-big' style='width:1260px; height:100%; z-index: 50;'></div>"), ymaps.ready(t.a) }) }.call(this, i("qIEf"), i("qIEf")) } },
  [
    ["W9W6", 0, 1, 2]
  ]
]);
