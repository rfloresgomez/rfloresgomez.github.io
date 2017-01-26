/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    let elemento = $("#mielemento");
    elemento.click(function(e){
        elemento.html("X: "+e.pageX+ " Y: "+e.pageY);
    });
});