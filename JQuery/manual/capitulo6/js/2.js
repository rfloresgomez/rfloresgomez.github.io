/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    let micapa = $("#micapa");
    let mensaje = $("#mensaje");
    let numClick = 0;
    let numDobleClick = 0;

    micapa.click(function () {
        numClick++;
        mensaje.html("Has hecho click.<br/>Número de click: "+numClick+"<br/>Número de doble click: "+numDobleClick);
    });

    micapa.dblclick(function () {
        numDobleClick++;
        mensaje.html("Has hecho doble click.<br/>Número de click: "+numClick+"<br/>Número de doble click: "+numDobleClick);
    });
});