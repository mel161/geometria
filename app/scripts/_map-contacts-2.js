/* global ymaps */
// /* global $ */
import './vendor/jquery.min'

function init () {
  var myMap = new ymaps.Map('map-big', {
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
  // myMap.behaviors.disable(['scrollZoom'])
  // myMap.setBounds(myMap.geoObjects.getBounds())
}

export default init
