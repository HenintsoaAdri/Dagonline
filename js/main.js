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
    })
    var interval;
    carteAnimate($(".carte-pub div").first());
    function carteAnimate(selector) {
        interval = setInterval(function(){
            if(selector.find("input").first().is("#carte-pub-selector-last")){
                selector = $(".carte-pub div").first();
            }
            $(".carte-pub input").prop("checked",false);
            selector.find("input").first().prop("checked",true);
            selector = selector.find("div").first();
        }, 3000);
    }
    $(".carte-pub input").on("click",function () {
        clearInterval(interval);
        setTimeout(carteAnimate,1000,$(this).parent());
    });

});

$('.buy').click(function(){
  $('.bottom').addClass("clicked");
});

$('.remove').click(function(){
  $('.bottom').removeClass("clicked");
});

$(".dropdown-header").hover(function(){
    $('.dropdown-ul').show();
},function(){
    $('.dropdown-ul').hide();
});

