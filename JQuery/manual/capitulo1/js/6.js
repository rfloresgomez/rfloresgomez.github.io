/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function(){
    $("#ocultar").click(function(evento) {
       $("#capaefectos").hide("slow");
    });
    $("#mostrar").click(function(evento) {
       $("#capaefectos").show(3000);
    });
});