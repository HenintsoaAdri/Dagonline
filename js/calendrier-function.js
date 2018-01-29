$(document).ready(function() {
    var dateFormat = "<span class='day'>dd</span> <span class='month'>MM</span>";
    var monthNames = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    var calendar = $("#calendar").datepicker({
        inline: true,

        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: monthNames,
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun',
            'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        weekHeader: 'Sm',
        dateFormat: dateFormat,
        firstDay: 1,

        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function (dateText, inst) {
            $(".date-selected").html(dateText);
        }
    });
    var selectedDate = $("#calendar").datepicker("getDate");
    $(".date-selected").html($.datepicker.formatDate(dateFormat, selectedDate, {
        monthNames: monthNames
    }));
    $(document).on('click','.ui-datepicker-next',function () {
        $('.ui-datepicker').addClass('magictime spaceInLeft');
        setTimeout(function(){
            $( ".ui-datepicker" ).removeClass( "magictime spaceInLeft" );
        }, 500);
    });
    $(document).on('click','.ui-datepicker-prev',function () {
        $('.ui-datepicker').addClass('magictime spaceInRight');
        setTimeout(function(){
            $('.ui-datepicker').removeClass('magictime spaceInRight');
        }, 500);
    });
});