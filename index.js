/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function () {
    let capitulos = $(".capitulos");
    capitulos.css("display", "none");

    $("#cap1").click(function (evento) {
        capitulos.hide(500);
        $("#divcap1").show(1000);
    });

    $("#cap2").click(function (evento) {
        capitulos.hide(500);
        $("#divcap2").show(1000);
    });

    $("#cap4").click(function (evento) {
        capitulos.hide(500);
        $("#divcap4").show(1000);
    });
    $("#cap5").click(function (evento) {
        capitulos.hide(500);
        $("#divcap5").show(1000);
    });
    $("#cap6").click(function (evento) {
        capitulos.hide(500);
        $("#divcap6").show(1000);
    });
    $("#cap7").click(function (evento) {
        capitulos.hide(500);
        $("#divcap7").show(1000);
    });
    $("#cap8").click(function (evento) {
        capitulos.hide(500);
        $("#divcap8").show(1000);
    });
    $("#cap3").click(function (evento) {
        capitulos.hide(500);
        $("#divcap3").show(1000);
    });
});