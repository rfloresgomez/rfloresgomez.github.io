/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function () {
    $("#enlace1").click(function (evento) {
        $("#mensaje").html("En el enlace1 tiene el dato 'midato' como "+$("#enlace1").data("midato"));
    });

    $("#enlace2").click(function (evento) {
        $("#mensaje").html("En el enlace2 tiene el dato 'midato' como "+$("#enlace2").data("midato"));
    });

    $("#enlace3").click(function (evento) {
        $("#mensaje").html("En el enlace3 tiene el dato 'midato' como "+$("#enlace3").data("midato"));
    });

    $("#guardar").click(function (evento){
        $("a").data("midato", "mivalor");
    });

    $("#guardarenlace1").click(function (evento){
        $("#enlace1").data("midato", "otrovalor");
    });
});