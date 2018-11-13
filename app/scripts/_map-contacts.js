/* global ymaps */
/* global $ */
import './vendor/jquery.min'

// function checkMQ () {
//   var dw = $('.page').outerWidth()
//
//   if (dw >= 1200) {
//     return [[60, 75], [-30, -75]]
//   } else {
//     return [[36, 45], [-15, -35]]
//   }
// }

function init () {
  var myMap = new ymaps.Map('map', {
    center: [
      56.832403, 60.582798
    ],
    zoom: 17,
    controls: [60, 75]
  })

  var myPlacemark = new ymaps.Placemark([
    56.832403, 60.582798
  ], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './app/images/point-home.png',
    // Размеры метки.
    iconImageSize: [
      60, 75
    ],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-30, -75]
  })

  myMap.geoObjects.add(myPlacemark)
  myMap.behaviors.disable(['scrollZoom'])
  // myMap.setBounds(myMap.geoObjects.getBounds())

  /* global Strip */
  $('.map').click(function () {
    var elem = $('#map-big')

    var windowSize = ($('.page').width() - $('.col--left').outerWidth()) + 'x' + $('.page').height()

    Strip.show('https://dummyimage.com/' + windowSize + '+/000/fff', {
      maxWidth: 1260,
      hideOnClickOutside: false,
      keyboard: false,
      loop: false,
      onShow: function () {
        elem.detach().appendTo('.strp-container')
        myMap.container.fitToViewport()
      },
      afterHide: function () {
        elem.detach().appendTo('.strp-window')
        myMap.container.fitToViewport()
      },
      afterPosition: function (position) {
        myMap.container.fitToViewport()
      }
    })
  })
}

export default init
