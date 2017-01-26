/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    $("a").each(function (i) {
        let titulo = $(this).attr("tittle");
        alert("Atributo título del enlace "+i+" : "+titulo);
    });
});