/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    $("input.fecha").attr("value", function () {
        let hoy = new Date();
        return hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear();
    });
});