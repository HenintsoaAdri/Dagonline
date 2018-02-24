/*
 jQuery;
 */

"use strict";

jQuery(document).ready(function ($) {
    $(".filtre").on("change keyup", function() {
        var value = $("#filtre-nom").val().toLowerCase();
        $(".resto-main .row").each(function() {
            var display = true;
            var row = $(this);
            $('select.filtre').each(function () {
                display = display && ($(this).val() == null || $(this).val() == "" || row.hasClass($(this).val()));
            });
            display = display && $(this).find('.vignette-detail h3').text().toLowerCase().indexOf(value) > -1;
            $(this).toggle(display);
        });
    });
});