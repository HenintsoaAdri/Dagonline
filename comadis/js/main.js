/*
 jQuery;
 */

"use strict";

jQuery(document).ready(function ($) {
    $(".loaded").fadeOut(1000);
    $(".preloader").delay(500).fadeOut(1000);
    $('[data-toggle="tooltip"]').tooltip();
    $('.navbar').affix({offset: {top: ($('.banniere').height()+100)} });
});
