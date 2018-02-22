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