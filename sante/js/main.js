/*
 jQuery;
 */

"use strict";

jQuery(document).ready(function ($) {
    $(".loaded").fadeOut();
    $(".preloader").delay(500).fadeOut(1000);

    // TOAST
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

    //PRATICIEN CAROUSEL
    try{
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            center: true,
            loop:true,
            dots:true,
            dotsEach:true,
            items:2,
            margin:10,
            responsive:{
                600:{
                    items:4
                }
            },
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
    }catch (e){}

    //PRATICIEN DATETIME PICKER
    try{
        $.datetimepicker.setLocale('fr');
        $('.datetimepicker').datetimepicker({
            format:'d.m.Y H:i',
            inline:true,
            allowTimes:[
                '08:00', '09:00', '10:00',
                '14:00', '15:05', '15:20', '16:00', '17:00'
            ],
            minTime:0,
            maxTime:'19:00',
            minDate:0,
            disabledWeekDays:[0,6]
        });
        $('.datetimepicker-input').datetimepicker({
            format:'d.m.Y H:i',
            inline:false,
            allowTimes:[
                '08:00', '09:00', '10:00',
                '14:00', '15:05', '15:20', '16:00', '17:00'
            ],
            minTime:0,
            maxTime:'19:00',
            minDate:0,
            disabledWeekDays:[0,6]
        });
    }catch (e){}

    // REDUCTION & DEVELOPPEMENT FILTRE
    try{
        $('.toggle-filtre').on("click", function () {
            if($(this).html() == 'Tout réduire'){
                $(this).html('Tout développer');
                $('.filtre .collapse').collapse("hide");
            }else{
                $(this).html('Tout réduire');
                $('.filtre .collapse').collapse("show");
            }
        });
        $("[id^='more-filtre']").on("hide.bs.collapse", function(){
            var anchor = "a[href='#" + $(this).attr('id') + "']";
            $(anchor + " svg.pull-right").addClass("fa-plus").removeClass("fa-minus");
        });
        $("[id^='more-filtre']").on("show.bs.collapse", function(){
            var anchor = "a[href='#" + $(this).attr('id') + "']";
            $(anchor + " svg.pull-right").addClass("fa-minus").removeClass("fa-plus");
        });
        $('.filtre .collapse').collapse("show");
    }catch (e){}
});
