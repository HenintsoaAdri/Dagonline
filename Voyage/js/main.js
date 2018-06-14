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
	try{
		$('.datepicker').datepicker();
	}catch (e){}
});


/*
    STEP FORMULAIRE
*/
$(document).ready(function () {
  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');
});