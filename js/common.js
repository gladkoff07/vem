"use strict";

$(function () {
  // Mask
  $("input[name='phone']").mask("+7(999) 999-99-99");

  // menu catalog
  $('.js-toggle-menu').on('click', function () {
    $(this).closest('.menu-catalog__item-box').toggleClass('menu-catalog__item-box--active');
    $(this).closest('.menu-catalog__item').find('.menu-subcatalog').toggleClass('menu-subcatalog--active');
  });

  // media
  function mediaSize_767() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.main').find('.menu').appendTo('.menu-mobile__nav');
      $('.header').find('.header-info').removeClass('header__info').appendTo('.menu-mobile__info');
      $('.header__bottom').find('.logo').prependTo('.header__top .container');
      $('.aside').find('.aside__header').insertAfter('.menu-mobile__nav .menu');
      $('.aside').find('.menu-catalog').removeClass('aside__menu').insertAfter('.menu-mobile__nav .aside__header');
      if ($('.header__top').find('.block-phone__item').hasClass('block-phone__item--clone')) {
        $('.header__top').find('.logo').next('.block-phone__item--clone').remove();
      }
      $('.menu-mobile').find('.menu-mobile__info').find('.header-info__phone--astana').find('.block-phone__item:nth-child(1)').addClass('block-phone__item--clone').clone().insertAfter('.header__top .logo');
    } else {
      $('.menu-mobile').find('.menu').insertBefore('.main__body');
      $('.menu-mobile').find('.header-info').addClass('header__info').appendTo('.header__top .container');
      $('.header__top').find('.logo').insertBefore('.header__bottom .header__search');
      $('.menu-mobile').find('.aside__header').prependTo('.aside');
      $('.menu-mobile').find('.menu-catalog').addClass('aside__menu').insertAfter('.aside__header');
      $('.header__top').find('.container > .block-phone__item--clone').remove();
      $('.menu-mobile').removeClass('menu-mobile--active');
      $('body').removeClass('body-fixed');
    }
  }
  ;
  mediaSize_767();
  /* Attach the function to the resize event listener */
  window.addEventListener('resize', mediaSize_767);

  // mobile menu
  $('.js-mobile-button').on('click', function () {
    $('.menu-mobile').addClass('menu-mobile--active');
    $('body').addClass('body-fixed');
  });

  // close mobile menu
  $('.js-menu-close').on('click', function (e) {
    e.preventDefault();
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('body').removeClass('body-fixed');
  });

  // calc
  $('.calc__item--minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.calc__item--plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  //  tabs
  $('.tabs-nav__inner').delegate('div:not(.tabs-nav__item--active)', 'click', function (e) {
    e.preventDefault();
    $(this).addClass('tabs-nav__item--active').siblings().removeClass('tabs-nav__item--active').parents('.tabs').find('.tabs-content').removeClass('tabs-content--active').eq($(this).index()).addClass('tabs-content--active');
    // .hide().eq($(this).index()).fadeIn(1000);
  });

  // file
  $('.js-file').on('change', function (e) {
    $(this).prev('.block-file__name').html(e.target.files[0].name);
  });
});