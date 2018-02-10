/*
 jQuery;
 */

"use strict";

jQuery(document).ready(function ($) {
    $(".loaded").fadeOut(3000);
    $(".preloader").delay(500).fadeOut(3000);
    $('[data-toggle="tooltip"]').tooltip();
    $('.navbar').affix({offset: {top: ($('.banniere').height()+100)} });
});
