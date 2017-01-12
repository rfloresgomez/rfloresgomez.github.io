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

    $("#cap3").click(function (evento) {
        capitulos.hide(500);
        $("#divcap3").show(1000);
    });
});