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
	/* Datepicker */
	try{
		$('.datepicker').datepicker();
	}catch (e){}
	/* From To datepicker */
	var dateFormat = "yy-mm-dd",
      from = $( ".from" )
        .datepicker({
		  minDate:0,
          defaultDate: "+1w",
          changeMonth: true,
		  prevText: "Prec.",nextText: "Suiv.",
		  dateFormat: dateFormat
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( ".to" ).datepicker({
		  minDate:0,
          defaultDate: "+1w",
          changeMonth: true,
		  prevText: "Prec.",nextText: "Suiv.",
		  dateFormat: dateFormat
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  
  //INDEX CAROUSEL
    try{
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            center: true,
            loop:true,
            dots:true,
            dotsEach:true,
            items:2,
            margin:5,
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
    }catch (e){console.log(e);}
	
	//TAG SELECT CHOSEN
	$('.destination-select').chosen({
		no_results_text: 'Oops, nous ne connaissons pas cette destination!',
		inherit_select_classes: true
	});
});