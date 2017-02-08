/**
 * Created by btt_9 on 08/02/2017.
 */
$(document).ready(function () {
    $(".ajustar").css("height", window.innerHeight);

    $(window).resize(function () {
        $(".ajustar").css("height", window.innerHeight);
    });
    let visto = false;
    let nav = $("#menu");
    //nav.css("display", "none");
    $("#botonmenu").on("click", function () {
        if(visto){
            nav.fadeOut(300);
            visto = false;
        }else{
            nav.css({
                display: function(){
                    nav.fadeIn(500);
                    return "flex";
                }
            });
            visto = true;
        }
    });
});