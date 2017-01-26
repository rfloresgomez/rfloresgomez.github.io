/**
 * Created by btt_9 on 23/01/2017.
 */
$(document).ready(function () {
    $("#titulo").animate({
        opacity: 0.25,
    }, 5000, function() {
        $(this).css("opacity", "1");
    });

    $("#enlace").on("click", function (evento) {
        evento.preventDefault();
        window.open("deTodoUnPoco.html", "De todo un poco","width=450,height=700");
    });

    $("#boton").on("click", function (e) {
        e.preventDefault();
        window.open("formulario.html");
    })
});