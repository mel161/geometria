/* global ymaps */
/* global $ */

function init () {
  var myMap = new ymaps.Map('map', {
    center: [
      56.832403, 60.582798
    ],
    zoom: 17,
    controls: []
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
  // myMap.setBounds(myMap.geoObjects.getBounds())

  /* global Strip */
  $('.map').click(function () {
    var elem = $('#map-big')

    var windowSize = ($('.page').width() - 660) + 'x' + $('.page').height()

    Strip.show('https://dummyimage.com/' + windowSize + '+/000/fff', {
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
