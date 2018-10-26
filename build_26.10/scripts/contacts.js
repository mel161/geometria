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
  /******/return __webpack_require__(__webpack_require__.s = "./website/src/js/contacts.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./website/src/js/_map-contacts-2.js":
  /*!*******************************************!*\
    !*** ./website/src/js/_map-contacts-2.js ***!
    \*******************************************/
  /*! exports provided: default */
  /***/function websiteSrcJs_mapContacts2Js(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* global ymaps */
    // /* global $ */

    function init() {
      var myMap = new ymaps.Map('map-big', {
        center: [56.832403, 60.582798],
        zoom: 17,
        controls: []
      });

      var myPlacemark = new ymaps.Placemark([56.832403, 60.582798], {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './app/images/point-home.png',
        // Размеры метки.
        iconImageSize: [60, 75],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -75]
      });

      myMap.geoObjects.add(myPlacemark);
      // myMap.setBounds(myMap.geoObjects.getBounds())
    }

    /* harmony default export */__webpack_exports__["default"] = init;

    /***/
  },

  /***/"./website/src/js/_map-contacts.js":
  /*!*****************************************!*\
    !*** ./website/src/js/_map-contacts.js ***!
    \*****************************************/
  /*! exports provided: default */
  /***/function websiteSrcJs_mapContactsJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* global ymaps */
    /* global $ */

    function init() {
      var myMap = new ymaps.Map('map', {
        center: [56.832403, 60.582798],
        zoom: 17,
        controls: []
      });

      var myPlacemark = new ymaps.Placemark([56.832403, 60.582798], {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './app/images/point-home.png',
        // Размеры метки.
        iconImageSize: [60, 75],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -75]
      });

      myMap.geoObjects.add(myPlacemark);
      // myMap.setBounds(myMap.geoObjects.getBounds())

      /* global Strip */
      $('.map').click(function () {
        var elem = $('#map-big');

        var windowSize = $('.page').width() - 660 + 'x' + $('.page').height();

        Strip.show('https://dummyimage.com/' + windowSize + '+/000/fff', {
          onShow: function onShow() {
            elem.detach().appendTo('.strp-container');
            myMap.container.fitToViewport();
          },
          afterHide: function afterHide() {
            elem.detach().appendTo('.strp-window');
            myMap.container.fitToViewport();
          },
          afterPosition: function afterPosition(position) {
            myMap.container.fitToViewport();
          }
        });
      });
    }

    /* harmony default export */__webpack_exports__["default"] = init;

    /***/
  },

  /***/"./website/src/js/contacts.js":
  /*!************************************!*\
    !*** ./website/src/js/contacts.js ***!
    \************************************/
  /*! no exports provided */
  /***/function websiteSrcJsContactsJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _map_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./_map-contacts */"./website/src/js/_map-contacts.js");
    /* harmony import */var _map_contacts_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./_map-contacts-2 */"./website/src/js/_map-contacts-2.js");

    jQuery(document).ready(function () {
      // Map
      /* global ymaps */
      ymaps.ready(_map_contacts__WEBPACK_IMPORTED_MODULE_0__["default"]);

      $('.strp-window').prepend("<div id='map-big' style='width:1260px; height:100%; z-index: 50;'></div>");

      ymaps.ready(_map_contacts_2__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });

    /***/
  }

  /******/ });
//# sourceMappingURL=contacts.js.map
