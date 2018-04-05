$(document).ready(function(){
    $(".fab-button").stick_in_parent({offset_top:$(window).height() - $(".fab-button").outerHeight() - 10});
    $('.toggle-filtre').on("click", function () {
        if($(this).html() == 'Tout réduire'){
            $(this).html('Tout développer');
            $('.filtre .collapse').collapse("hide");
        }else{
            $(this).html('Tout réduire');
            $('.filtre .collapse').collapse("show");
        }
    })
    $("[id^='more-filtre']").on("hide.bs.collapse", function(){
        anchor = "a[href='#" + $(this).attr('id') + "']";
        $(anchor + " svg.pull-right").addClass("fa-plus").removeClass("fa-minus");
    });
    $("[id^='more-filtre']").on("show.bs.collapse", function(){
        anchor = "a[href='#" + $(this).attr('id') + "']";
        $(anchor + " svg.pull-right").addClass("fa-minus").removeClass("fa-plus");
    });
    $('.filtre .collapse').collapse("show");
    $('a[data-filtre]').on("click", function () {
        $('.annonces .nav-pills li').removeClass('active');
        $(this).parent('li').addClass('active');
        filtre = $(this).attr('data-filtre');
        $('#annonce .annonce').slideDown();
        $('#annonce .annonce').not('.'+filtre).slideUp();
    })
});