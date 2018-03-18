/*
 jQuery;
 */

"use strict";

jQuery(document).ready(function ($) {
    $(".loaded").fadeOut();
    $(".preloader").delay(500).fadeOut(1000);
    $.toast({
        text: 'Bonjour, bienvenue sur le site www.dagonline.fr',
        position: 'top-right',
        bgColor: '#e1a919',
        hideAfter: 5000,
        textColor: 'white',
        stack: false,
        loaderBg:'#ffc93e'
    });
    $('[data-toggle~="tooltip"]').tooltip({delay:50});
    try{
        $(".sticky").stick_in_parent({offset_top:$('.navbar').height() + 10});
    }catch (e){}
    $(document).on({
        mouseenter: function(){
            $(this).trigger("click");
        },
        mouseleave: function(){
            $(this).trigger("click");
        }
    },'select');
});
