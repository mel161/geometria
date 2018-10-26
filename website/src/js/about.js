jQuery(document).ready(() => {
  $('.card').click(function (event) {
    event.preventDefault();

    $(this).toggleClass('card--active');

    $(this).parent().toggleClass('list__item--card-active').siblings()
      .removeClass('list__item--card-active')
      .find('.card')
      .removeClass('card--active');
  });
});
