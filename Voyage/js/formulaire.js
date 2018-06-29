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
  var total = 0;
  /* ESTIMATION */
  $('#estimation input').on('change',function(){
	var confort = parseFloat($('#estimation input[name="confort"]:checked').val()) || 0;
	total = confort * parseInt($('#estimation input[name="duree"]').val());
	$('#estimation-totale').text(total.toLocaleString());
  });
  $('#submit-estimation').on('click', function(){
	$('#input-estimation-totale').val(total);
        $("#estimation").collapse('hide');
  });
  
	$('#comment').on('keyup, change',function(){
		$('#nb-caractere').html($(this).val().length);
	});
	/* INTERNATIONAL TEL */
	$(".phone").intlTelInput({preferredCountries:["mg", "fr"]});
});