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


    $('a').click(function() {

        if(visto){
            nav.fadeOut(300);
            visto = false;
        }

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

            }

        }

    });
});