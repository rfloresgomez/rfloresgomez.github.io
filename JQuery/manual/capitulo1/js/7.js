/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function () {
    $("#pilallamadas").click(function(evento){
        $("#micapa").fadeOut(1000, function () {
            $("#micapa").css({'top': 300, 'left': 300});
            $("#micapa").fadeIn(1000);
        });
    });
});