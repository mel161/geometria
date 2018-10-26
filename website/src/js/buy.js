jQuery(document).ready(() => {
  $('.card__info').hover(function () {
    $(this)
      .parent()
      .next('.card__back')
      .toggleClass('card__back--hover')
  })
})
