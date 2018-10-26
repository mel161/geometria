/* global ymaps */
/* global $ */

import { points as groups } from './_location-points';

function init() {
  // Создание экземпляра карты.
  let myMap = new ymaps.Map('map', {
    center: [
      56.821333, 60.640160,
    ],
    zoom: 16,
    controls: [],
  });

  // Контейнер для меню.
  let menu = $('#js-map-nav');

  let myPlacemark1 = new ymaps.Placemark([
    56.821333, 60.640160,
  ], {
    // Свойства.
    hintContent: 'ЖК&nbsp;&laquo;Геометрия&raquo;',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/point-home.png',
    // Размеры метки.
    iconImageSize: [
      60, 75,
    ],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-30, -75],
  });

  function createMenuGroup(group) {
    // Пункт меню.
    let menuItem = $(`<li class="nav__item nav__item--map"><a class="link link--nav" href="#">${ group.name }</a></li>`);
    // Коллекция для геообъектов группы.
    let collection = new ymaps.GeoObjectCollection(null, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './app/images/point-other.png',
      // Размеры метки.
      iconImageSize: [
        27, 34,
      ],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-14, -30],
    });
    // Контейнер для подменю.
    let submenu = $('<ul class="submenu"/>');

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

        $(this).parent()
          .addClass('nav__item--active')
          .siblings()
          .removeClass('nav__item--active');

        let result = ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);

        myPlacemark1.options.set('visible', true);

        let objectsInsidePolygon = ymaps.geoQuery(collection.toArray());
        result.intersect(objectsInsidePolygon).setOptions('visible', true);
      });
    for (let j = 0, m = group.items.length; j < m; j += 1) {
      /* eslint no-use-before-define: 1 */
      createSubMenu(group.items[j], collection, submenu);
    }

    $('#js-map-nav-show-all').click(function (e) {
      e.preventDefault();
      ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true);
      $(this)
        .parent()
        .addClass('nav__item--active')
        .siblings()
        .removeClass('nav__item--active');
    });
  }

  function createSubMenu( item, collection, submenu ) {
    // Пункт подменю.
    // Создаем метку.
    let placemark = new ymaps.Placemark(item.center, {
      // balloonContent:em.name,
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './app/images/point-other.png',
      // Размеры метки.
      iconImageSize: [
        27, 34,
      ],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-16, 45],
    });

    for (let i = 0, l = groups.length; i < l; i += 1) {
      createMenuGroup(groups[i]);
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

export default init;
