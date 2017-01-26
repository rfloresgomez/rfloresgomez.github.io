/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    $(".mienlace").click(function (evento) {
        evento.preventDefault();
        alert("No te lleva al enlace porque le he hecho un preventDefault()");
    });
});