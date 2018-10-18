/* global ymaps */
/* global $ */

function init () {
  var myMap = new ymaps.Map('map', {
    center: [
      56.84, 60.58
    ],
    zoom: 12,
    controls: []
  })

  var myPlacemark = new ymaps.Placemark([
    56.832474, 60.573592
  ], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './../images/point-other.png',
    // Размеры метки.
    iconImageSize: [
      42, 51
    ],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-21, -35]
  })

  // Создадим пользовательский макет ползунка масштаба.
  var ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map__control'>" + "<div id='zoom-in' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='icon icon--plus'><path fill='#B4B4B4' fill-rule='evenodd' d='M15 9H9v6a1 1 0 0 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2z'/></svg></div><br>" + "<div id='zoom-out' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='2' class='icon icon--minus'><path fill='#B4B4B4' fill-rule='evenodd' d='M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z'/></svg></i></div>" + '</div>', {

    // Переопределяем методы макета, чтобы выполнять дополнительные действия
    // при построении и очистке макета.
    build: function () {
      // Вызываем родительский метод build.
      ZoomLayout.superclass.build.call(this)

      // Привязываем функции-обработчики к контексту и сохраняем ссылки
      // на них, чтобы потом отписаться от событий.
      this.zoomInCallback = ymaps.util.bind(this.zoomIn, this)
      this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this)

      // Начинаем слушать клики на кнопках макета.
      $('#zoom-in').bind('click', this.zoomInCallback)
      $('#zoom-out').bind('click', this.zoomOutCallback)
    },

    clear: function () {
      // Снимаем обработчики кликов.
      $('#zoom-in').unbind('click', this.zoomInCallback)
      $('#zoom-out').unbind('click', this.zoomOutCallback)

      // Вызываем родительский метод clear.
      ZoomLayout.superclass.clear.call(this)
    },

    zoomIn: function () {
      var map = this.getData().control.getMap()
      map.setZoom(map.getZoom() + 1, {
        checkZoomRange: true
      })
    },

    zoomOut: function () {
      var map = this.getData().control.getMap()
      map.setZoom(map.getZoom() - 1, {
        checkZoomRange: true
      })
    }
  })

  var zoomControl = new ymaps.control.RulerControl({
    options: {
      layout: ZoomLayout,
      bottom: '40',
      top: 'auto',
      right: '0'
    }
  })

  myMap.controls.add(zoomControl)
  myMap.geoObjects.add(myPlacemark)

  /* global Strip */
  $('.map').click(function () {
    var elem = $('#map-big')

    Strip.show('https://dummyimage.com/1260x1000/000/fff', {
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
