/* global $ */

$(document).ready(function ($) {
  if ($('div').is('.strp-close')) {
    $('.strp-close').empty().append('<svg class="icon icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38"><path fill-rule="evenodd" d="M36.117.261l2.121 2.121L2.883 37.738.761 35.617 36.117.261z"></path><path fill-rule="evenodd" d="M1.012 2.104L3.161.011l35.827 34.884-2.15 2.093L1.012 2.104z"></path></svg>')
    if ($('.main').is('.main--contacts')) {
      $('.strp-close .icon').addClass('icon--dark-grey')
    }
  }
})
