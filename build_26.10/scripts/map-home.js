/* global ymaps */
/* global $ */

// Группы объектов
var groups = [{
  name: 'Супермаркеты',
  style: 'islands#redIcon',
  items: [{
    center: [56.842167, 60.579876],
    name: 'Байкпарк Сити;'
  },
  {
    center: [56.841569, 60.581955],
    name: 'Велопарковка'
  },
  {
    center: [56.838494, 60.583188],
    name: 'Велопарковка'
  }
  ]
},
{
  name: 'Аптеки',
  style: 'islands#greenIcon',
  items: [{
    center: [56.842790, 60.574294],
    name: 'Детский сад № 414'
  },
  {
    center: [56.843435, 60.578110],
    name: 'Детский сад № 472'
  },
  {
    center: [56.843764, 60.580119],
    name: 'МБДОУ детский сад № 251;'
  },
  {
    center: [56.838566, 60.583301],
    name: 'Гимназия № 2;'
  }
  ]
},
{
  name: 'Стоматологии',
  style: 'islands#orangeIcon',
  items: [{
    center: [56.840672, 60.579893],
    name: 'Поликлиника ЦГБ № 2'
  },
  {
    center: [56.841299, 60.580226],
    name: 'Аптечный мир'
  },
  {
    center: [56.840943, 60.578556],
    name: 'Стоматология Дар'
  }
  ]
},
{
  name: 'Салоны красоты',
  style: 'islands#blueIcon',
  items: [{
    center: [56.841535, 60.572307],
    name: 'Ресторан Бордо'
  },
  {
    center: [56.840754, 60.583604],
    name: 'Ресто-бар Улетели'
  },
  {
    center: [56.837016, 60.582608],
    name: 'Мята'
  },
  {
    center: [56.837685, 60.580287],
    name: 'Дворец Молодёжи'
  }
  ]
},
{
  name: 'Кафе',
  style: 'islands#blueIcon',
  items: [{
    center: [56.838051, 60.574802],
    name: 'Вариант'
  },
  {
    center: [56.841939, 60.573979],
    name: 'Продуктовый микс'
  },
  {
    center: [56.841663, 60.582139],
    name: 'Пятёрочка'
  }
  ]
},
{
  name: 'Детские сады',
  style: 'islands#blueIcon',
  items: [{
    center: [56.838051, 60.574802],
    name: 'Вариант'
  },
  {
    center: [56.841939, 60.573979],
    name: 'Продуктовый микс'
  },
  {
    center: [56.841663, 60.582139],
    name: 'Пятёрочка'
  }
  ]
},
{
  name: 'Школы',
  style: 'islands#blueIcon',
  items: [{
    center: [56.838051, 60.574802],
    name: 'Вариант'
  },
  {
    center: [56.841939, 60.573979],
    name: 'Продуктовый микс'
  },
  {
    center: [56.841663, 60.582139],
    name: 'Пятёрочка'
  }
  ]
},
{
  name: 'Фитнес-центры',
  style: 'islands#blueIcon',
  items: [{
    center: [56.838051, 60.574802],
    name: 'Вариант'
  },
  {
    center: [56.841939, 60.573979],
    name: 'Продуктовый микс'
  },
  {
    center: [56.841663, 60.582139],
    name: 'Пятёрочка'
  }
  ]
}
]

function init () {
  // Создание экземпляра карты.
  var myMap = new ymaps.Map('map', {
    center: [
      56.821333, 60.640160
    ],
    zoom: 16,
    controls: []
  })

  // Контейнер для меню.
  var menu = $('#js-map-nav')

  for (var i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i])
  }

  function createMenuGroup (group) {
    // Пункт меню.
    var menuItem = $('<li class="nav__item nav__item--map"><a class="link link--nav" href="#">' + group.name + '</a></li>')
    // Коллекция для геообъектов группы.
    var collection = new ymaps.GeoObjectCollection(null, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './app/images/point-other.png',
      // Размеры метки.
      iconImageSize: [
        27, 34
      ],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-14, -30]
    })
    // Контейнер для подменю.
    var submenu = $('<ul class="submenu"/>')

    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection)
    // Добавляем подменю.
    menuItem
      // .append(submenu)
      // Добавляем пункт в меню.
      .appendTo(menu)
      // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
      .find('a').bind('click', function (e) {
        e.preventDefault()

        $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')

        var result = ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false)

        myPlacemark1.options.set('visible', true)

        var objectsInsidePolygon = ymaps.geoQuery(collection.toArray())
        result.intersect(objectsInsidePolygon).setOptions('visible', true)
      })
    for (var j = 0, m = group.items.length; j < m; j++) {
      createSubMenu(group.items[j], collection, submenu)
    }

    $('#js-map-nav-show-all').click(function (e) {
      e.preventDefault()
      ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true)
      $(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active')
    })
  }

  function createSubMenu (item, collection, submenu) {
    // Пункт подменю.
    // Создаем метку.
    var placemark = new ymaps.Placemark(item.center, {
      // balloonContent: item.name,
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './app/images/point-other.png',
      // Размеры метки.
      iconImageSize: [
        27, 34
      ],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-16, 45]
    })

    // Добавляем метку в коллекцию.
    collection.add(placemark)
  }

  // Добавляем меню в тэг BODY.
  menu.prependTo($('.map .nav'))

  var myPlacemark1 = new ymaps.Placemark([
    56.821333, 60.640160
  ], {
    // Свойства.
    hintContent: 'ЖК&nbsp;&laquo;Геометрия&raquo;'
  }, {
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

  myMap.geoObjects.add(myPlacemark1)

  // Выставляем масштаб карты чтобы были видны все группы.
  // myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.behaviors.disable(['scrollZoom'])
}
