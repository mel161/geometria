import './_tab';

import 'slick-carousel';

$(document).ready(() => {
  let resizing = false;

  function checkMQ() {
    let dw = $('.page').outerWidth();

    if (dw >= 1200) {
      return 'desktop';
    }
    return 'mobile';
  }

  function scrollInit() {
    let mq = checkMQ();

    if (mq === 'mobile') {
      $('.list--years').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        prevArrow: "<button class='btn btn--transparent btn--prev slick-prev'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
        nextArrow: "<button class='btn btn--transparent btn--next slick-next'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
      });
    } else {
      $('.slick-next').css('top', `${$('.slick-initialized').height() - 45 }px`);
    }
    resizing = false;
  }

  /* eslint no-console: 1 */
  $(window).on('resize', () => {
    if (!resizing) {
      (!window.requestAnimationFrame)
        ? setTimeout(scrollInit, 300)
        : window.requestAnimationFrame(scrollInit);
      resizing = true;
    }
  });

  scrollInit();

  $('.slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    centerMode: true,
    mobileFirst: true,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: "<button class='btn btn--base btn--prev slick-prev'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
    nextArrow: "<button class='btn btn--base btn--next slick-next'><svg class='icon icon--arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 15'><path fill-rule='evenodd' d='M26.144-.006l.858.917-13.136 14.094-.858-.916L26.144-.006z'></path><path fill-rule='evenodd' d='M-.005.915L.871.022l13.477 13.669-.876.892L-.005.915z'></path></svg></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '150px',
          vertical: true,
          useTransform: true,
          cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        },
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '38px',
          slidesToShow: 1,
          vertical: false,
          useTransform: false,
          adaptiveHeight: true,
        },
      },
    ],
  });
});
