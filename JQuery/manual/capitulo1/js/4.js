/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function(){
    $("a").mouseover(function(event){
        $("#capa").addClass("clasecss");
    });
    $("a").mouseout(function(event){
        $("#capa").removeClass("clasecss");
    });
});