/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function(){
    $("#capa").mouseenter(function(evento){
        $("#mensaje").css("display", "block");
    });
    $("#capa").mouseleave(function(evento){
        $("#mensaje").css("display", "none");
    });
})