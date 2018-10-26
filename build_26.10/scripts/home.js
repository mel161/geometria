'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./website/src/js/home.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./website/src/js/_location-points.js":
  /*!********************************************!*\
    !*** ./website/src/js/_location-points.js ***!
    \********************************************/
  /*! exports provided: points */
  /***/function websiteSrcJs_locationPointsJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "points", function () {
      return points;
    });
    // Группы объектов
    var points = [{
      name: 'Супермаркеты',
      style: 'islands#redIcon',
      items: [{
        center: [56.842167, 60.579876],
        name: 'Байкпарк Сити;'
      }, {
        center: [56.841569, 60.581955],
        name: 'Велопарковка'
      }, {
        center: [56.838494, 60.583188],
        name: 'Велопарковка'
      }]
    }, {
      name: 'Аптеки',
      style: 'islands#greenIcon',
      items: [{
        center: [56.842790, 60.574294],
        name: 'Детский сад № 414'
      }, {
        center: [56.843435, 60.578110],
        name: 'Детский сад № 472'
      }, {
        center: [56.843764, 60.580119],
        name: 'МБДОУ детский сад № 251;'
      }, {
        center: [56.838566, 60.583301],
        name: 'Гимназия № 2;'
      }]
    }, {
      name: 'Стоматологии',
      style: 'islands#orangeIcon',
      items: [{
        center: [56.840672, 60.579893],
        name: 'Поликлиника ЦГБ № 2'
      }, {
        center: [56.841299, 60.580226],
        name: 'Аптечный мир'
      }, {
        center: [56.840943, 60.578556],
        name: 'Стоматология Дар'
      }]
    }, {
      name: 'Салоны красоты',
      style: 'islands#blueIcon',
      items: [{
        center: [56.841535, 60.572307],
        name: 'Ресторан Бордо'
      }, {
        center: [56.840754, 60.583604],
        name: 'Ресто-бар Улетели'
      }, {
        center: [56.837016, 60.582608],
        name: 'Мята'
      }, {
        center: [56.837685, 60.580287],
        name: 'Дворец Молодёжи'
      }]
    }, {
      name: 'Кафе',
      style: 'islands#blueIcon',
      items: [{
        center: [56.838051, 60.574802],
        name: 'Вариант'
      }, {
        center: [56.841939, 60.573979],
        name: 'Продуктовый микс'
      }, {
        center: [56.841663, 60.582139],
        name: 'Пятёрочка'
      }]
    }, {
      name: 'Детские сады',
      style: 'islands#blueIcon',
      items: [{
        center: [56.838051, 60.574802],
        name: 'Вариант'
      }, {
        center: [56.841939, 60.573979],
        name: 'Продуктовый микс'
      }, {
        center: [56.841663, 60.582139],
        name: 'Пятёрочка'
      }]
    }, {
      name: 'Школы',
      style: 'islands#blueIcon',
      items: [{
        center: [56.838051, 60.574802],
        name: 'Вариант'
      }, {
        center: [56.841939, 60.573979],
        name: 'Продуктовый микс'
      }, {
        center: [56.841663, 60.582139],
        name: 'Пятёрочка'
      }]
    }, {
      name: 'Фитнес-центры',
      style: 'islands#blueIcon',
      items: [{
        center: [56.838051, 60.574802],
        name: 'Вариант'
      }, {
        center: [56.841939, 60.573979],
        name: 'Продуктовый микс'
      }, {
        center: [56.841663, 60.582139],
        name: 'Пятёрочка'
      }]
    }];

    /***/
  },

  /***/"./website/src/js/_map.js":
  /*!********************************!*\
    !*** ./website/src/js/_map.js ***!
    \********************************/
  /*! exports provided: default */
  /***/function websiteSrcJs_mapJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _location_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./_location-points */"./website/src/js/_location-points.js");
    /* global ymaps */
    /* global $ */

    function init() {
      // Создание экземпляра карты.
      var myMap = new ymaps.Map('map', {
        center: [56.821333, 60.640160],
        zoom: 16,
        controls: []
      });

      // Контейнер для меню.
      var menu = $('#js-map-nav');

      var myPlacemark1 = new ymaps.Placemark([56.821333, 60.640160], {
        // Свойства.
        hintContent: 'ЖК&nbsp;&laquo;Геометрия&raquo;'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './images/point-home.png',
        // Размеры метки.
        iconImageSize: [60, 75],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -75]
      });

      function createMenuGroup(group) {
        // Пункт меню.
        var menuItem = $('<li class="nav__item nav__item--map"><a class="link link--nav" href="#">' + group.name + '</a></li>');
        // Коллекция для геообъектов группы.
        var collection = new ymaps.GeoObjectCollection(null, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './app/images/point-other.png',
          // Размеры метки.
          iconImageSize: [27, 34],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-14, -30]
        });
        // Контейнер для подменю.
        var submenu = $('<ul class="submenu"/>');

        // Добавляем коллекцию на карту.;
        myMap.geoObjects.add(collection);;
        // Добавляем подменю.
        menuItem
        // .append(submenu)
        // Добавляем пункт в меню.
        .appendTo(menu)
        // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
        .find('a').bind('click', function (e) {
          e.preventDefault();

          $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active');

          var result = ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);

          myPlacemark1.options.set('visible', true);

          var objectsInsidePolygon = ymaps.geoQuery(collection.toArray());
          result.intersect(objectsInsidePolygon).setOptions('visible', true);
        });
        for (var j = 0, m = group.items.length; j < m; j += 1) {
          /* eslint no-use-before-define: 1 */
          createSubMenu(group.items[j], collection, submenu);
        }

        $('#js-map-nav-show-all').click(function (e) {
          e.preventDefault();
          ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true);
          $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active');
        });
      }

      function createSubMenu(item, collection, submenu) {
        // Пункт подменю.
        // Создаем метку.
        var placemark = new ymaps.Placemark(item.center, {
          // balloonContent:em.name,
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './app/images/point-other.png',
          // Размеры метки.
          iconImageSize: [27, 34],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-16, 45]
        });

        for (var i = 0, l = _location_points__WEBPACK_IMPORTED_MODULE_0__["points"].length; i < l; i += 1) {
          createMenuGroup(_location_points__WEBPACK_IMPORTED_MODULE_0__["points"][i]);
        }

        // Добавляем метку в коллекцию.
        collection.add(placemark);
      }

      // Добавляем меню в тэг BODY.
      menu.prependTo($('.map .nav'));

      myMap.geoObjects.add(myPlacemark1);

      // Выставляем масштаб карты чтобы были видны все группы.
      // myMap.setBounds(myMap.geoObjects.getBounds());
      myMap.behaviors.disable(['scrollZoom']);
    }

    /* harmony default export */__webpack_exports__["default"] = init;

    /***/
  },

  /***/"./website/src/js/_tab.js":
  /*!********************************!*\
    !*** ./website/src/js/_tab.js ***!
    \********************************/
  /*! no static exports found */
  /***/function websiteSrcJs_tabJs(module, exports) {

    /* global $ */
    $('.link--tab').click(function (event) {
      event.preventDefault();
      $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active');
      var tab = $(this).attr('href');
      $(tab).addClass('tab__item--active').siblings().removeClass('tab__item--active');
    });

    /***/
  },

  /***/"./website/src/js/home.js":
  /*!********************************!*\
    !*** ./website/src/js/home.js ***!
    \********************************/
  /*! no exports provided */
  /***/function websiteSrcJsHomeJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./_tab */"./website/src/js/_tab.js");
    /* harmony import */var _tab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tab__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./_map */"./website/src/js/_map.js");

    jQuery(document).ready(function () {
      /* global ymaps */
      ymaps.ready(_map__WEBPACK_IMPORTED_MODULE_1__["default"]);

      $('#js-map-nav-toggle').click(function () {
        $(this).toggleClass('btn--active');
        $('#js-map-nav').toggleClass('nav__list--visible');
      });
    });

    /***/
  }

  /******/ });
//# sourceMappingURL=home.js.map
