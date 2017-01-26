/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    let capa = $("#micapa");

    capa.css("color", "white");

    capa.css({
        "background-color": "#ff8800",
        "position": "absolute",
        "width": "100px",
        "top": "100px",
        "left": "200px"
    })

    $("#fondogris").click(function (e) {
        e.preventDefault();
        capa.css("background-color", "grey");
    });

    $("#fondonaranja").click(function (e) {
        e.preventDefault();
        capa.css("background-color", "orange");
    });

    $("#ocultarmostrar").click(function (e) {
        e.preventDefault();
        if(capa.css("display")=="none"){
            capa.css("display", "block");
        }else{
            capa.css("display", "none");
        }
    });

    capa.click(function () {
        capa.css("width", function (index, value) {
            let cantidad = prompt("¿Cuántos px quieres aumentar?", "30");
            return (parseInt(value) + parseInt(cantidad + "px"));
        });
    });

    capa.mouseover(function () {
        let left = parseInt($(this).css("left"));
        capa.css("left", left+10+"px");
    });
});
