(window.webpackJsonp = window.webpackJsonp || []).push([
  [11], {
    "4TRo": function(e, n, a) {
      (function(e) {
        e(document).ready(function(e) {
          e("div").is(".strp-close") && (e(".strp-close").empty().append('<svg class="icon icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38"><path fill-rule="evenodd" d="M36.117.261l2.121 2.121L2.883 37.738.761 35.617 36.117.261z"></path><path fill-rule="evenodd" d="M1.012 2.104L3.161.011l35.827 34.884-2.15 2.093L1.012 2.104z"></path></svg>'), e(".main").is(".main--contacts") && e(".strp-close .icon").addClass("icon--dark-grey"))
        })
      }).call(this, a("qIEf"))
    },
    QfWi: function(e, n, a) {
      "use strict";
      a.r(n),
        function(e, n) {
          a("ccr2"), a("tt5R"), a("4TRo");
          var t = a("hx0J");
          a("WMMs");
          e(document).ready(function() {
            ymaps.ready(t.a), n("#js-map-nav-toggle").click(function() {
              n(this).toggleClass("btn--active"), n("#js-map-nav").toggleClass("nav__list--visible")
            })
          })
        }.call(this, a("qIEf"), a("qIEf"))
    },
    hx0J: function(e, n, a) {
      "use strict";
      (function(e) {
        a("EfVy");
        var t = a("ywHE");
        n.a = function() {
          for (var n = new ymaps.Map("map", {
              center: [56.821333, 60.64016],
              zoom: 16,
              controls: []
            }), a = e("#js-map-nav"), s = 0, i = t.a.length; s < i; s++) c(t.a[s]);

          function c(t) {
            var s = e('<li class="nav__item nav__item--map"><a class="link link--nav" href="#">' + t.name + "</a></li>"),
              i = new ymaps.GeoObjectCollection(null, {
                iconLayout: "default#image",
                iconImageHref: "./images/point-other.png",
                iconImageSize: [27, 34],
                iconImageOffset: [-14, -30]
              });
            e('<ul class="submenu"/>');
            n.geoObjects.add(i), s.appendTo(a).find("a").bind("click", function(a) {
              a.preventDefault(), e(this).parent().addClass("nav__item--active").siblings().removeClass("nav__item--active");
              var t = ymaps.geoQuery(n.geoObjects).setOptions("visible", !1);
              l.options.set("visible", !0);
              var s = ymaps.geoQuery(i.toArray());
              t.intersect(s).setOptions("visible", !0)
            });
            for (var c = 0, m = t.items.length; c < m; c++) o(t.items[c], i);
            e("#js-map-nav-show-all").click(function(a) {
              a.preventDefault(), ymaps.geoQuery(n.geoObjects).setOptions("visible", !0), e(this).parent().addClass("nav__item--active").siblings().removeClass("nav__item--active")
            })
          }

          function o(e, n, a) {
            var t = new ymaps.Placemark(e.center, {
              iconLayout: "default#image",
              iconImageHref: "./images/point-other.png",
              iconImageSize: [27, 34],
              iconImageOffset: [-16, 45]
            });
            n.add(t)
          }
          a.prependTo(e(".map .nav"));
          var l = new ymaps.Placemark([56.821333, 60.64016], {
            hintContent: "\u0416\u041a&nbsp;&laquo;\u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f&raquo;"
          }, {
            iconLayout: "default#image",
            iconImageHref: "./images/point-home.png",
            iconImageSize: [60, 75],
            iconImageOffset: [-30, -75]
          });
          n.geoObjects.add(l), n.behaviors.disable(["scrollZoom"])
        }
      }).call(this, a("qIEf"))
    },
    tt5R: function(e, n, a) {
      "use strict";
      (function(e) {
        a("EfVy");
        e(".link--tab").click(function(n) {
          n.preventDefault(), e(this).parent().addClass("nav__item--active").siblings().removeClass("nav__item--active");
          var a = e(this).attr("href");
          e(a).addClass("tab__item--active").siblings().removeClass("tab__item--active")
        })
      }).call(this, a("qIEf"))
    },
    ywHE: function(e, n, a) {
      "use strict";
      a.d(n, "a", function() {
        return t
      });
      var t = [{
        name: "\u0421\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u044b",
        style: "islands#redIcon",
        items: [{
          center: [56.842167, 60.579876],
          name: "\u0411\u0430\u0439\u043a\u043f\u0430\u0440\u043a \u0421\u0438\u0442\u0438;"
        }, {
          center: [56.841569, 60.581955],
          name: "\u0412\u0435\u043b\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430"
        }, {
          center: [56.838494, 60.583188],
          name: "\u0412\u0435\u043b\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430"
        }]
      }, {
        name: "\u0410\u043f\u0442\u0435\u043a\u0438",
        style: "islands#greenIcon",
        items: [{
          center: [56.84279, 60.574294],
          name: "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u0430\u0434 \u2116 414"
        }, {
          center: [56.843435, 60.57811],
          name: "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u0430\u0434 \u2116 472"
        }, {
          center: [56.843764, 60.580119],
          name: "\u041c\u0411\u0414\u041e\u0423 \u0434\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u0430\u0434 \u2116 251;"
        }, {
          center: [56.838566, 60.583301],
          name: "\u0413\u0438\u043c\u043d\u0430\u0437\u0438\u044f \u2116 2;"
        }]
      }, {
        name: "\u0421\u0430\u043b\u043e\u043d\u044b \u043a\u0440\u0430\u0441\u043e\u0442\u044b",
        style: "islands#blueIcon",
        items: [{
          center: [56.841535, 60.572307],
          name: "\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u0411\u043e\u0440\u0434\u043e"
        }, {
          center: [56.840754, 60.583604],
          name: "\u0420\u0435\u0441\u0442\u043e-\u0431\u0430\u0440 \u0423\u043b\u0435\u0442\u0435\u043b\u0438"
        }, {
          center: [56.837016, 60.582608],
          name: "\u041c\u044f\u0442\u0430"
        }, {
          center: [56.837685, 60.580287],
          name: "\u0414\u0432\u043e\u0440\u0435\u0446 \u041c\u043e\u043b\u043e\u0434\u0451\u0436\u0438"
        }]
      }, {
        name: "\u041a\u0430\u0444\u0435",
        style: "islands#blueIcon",
        items: [{
          center: [56.838051, 60.574802],
          name: "\u0412\u0430\u0440\u0438\u0430\u043d\u0442"
        }, {
          center: [56.841939, 60.573979],
          name: "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0438\u043a\u0441"
        }, {
          center: [56.841663, 60.582139],
          name: "\u041f\u044f\u0442\u0451\u0440\u043e\u0447\u043a\u0430"
        }]
      }, {
        name: "\u0414\u0435\u0442\u0441\u043a\u0438\u0435 \u0441\u0430\u0434\u044b",
        style: "islands#blueIcon",
        items: [{
          center: [56.838051, 60.574802],
          name: "\u0412\u0430\u0440\u0438\u0430\u043d\u0442"
        }, {
          center: [56.841939, 60.573979],
          name: "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0438\u043a\u0441"
        }, {
          center: [56.841663, 60.582139],
          name: "\u041f\u044f\u0442\u0451\u0440\u043e\u0447\u043a\u0430"
        }]
      }, {
        name: "\u0428\u043a\u043e\u043b\u044b",
        style: "islands#blueIcon",
        items: [{
          center: [56.838051, 60.574802],
          name: "\u0412\u0430\u0440\u0438\u0430\u043d\u0442"
        }, {
          center: [56.841939, 60.573979],
          name: "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0438\u043a\u0441"
        }, {
          center: [56.841663, 60.582139],
          name: "\u041f\u044f\u0442\u0451\u0440\u043e\u0447\u043a\u0430"
        }]
      }, {
        name: "\u0424\u0438\u0442\u043d\u0435\u0441-\u0446\u0435\u043d\u0442\u0440\u044b",
        style: "islands#blueIcon",
        items: [{
          center: [56.838051, 60.574802],
          name: "\u0412\u0430\u0440\u0438\u0430\u043d\u0442"
        }, {
          center: [56.841939, 60.573979],
          name: "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0438\u043a\u0441"
        }, {
          center: [56.841663, 60.582139],
          name: "\u041f\u044f\u0442\u0451\u0440\u043e\u0447\u043a\u0430"
        }]
      }]
    }
  },
  [
    ["QfWi", 0, 1, 2]
  ]
]);
