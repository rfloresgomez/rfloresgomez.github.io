/**
 * Created by btt_9 on 23/01/2017.
 */
$(document).ready(function () {
    let visto = false;
    let aside = $("aside");
    $("#mas").on("click", function () {
        if(visto){
            aside.fadeOut(300);
            visto = false;
        }else{
            aside.fadeIn(500);
            visto = true;
        }
    });
});