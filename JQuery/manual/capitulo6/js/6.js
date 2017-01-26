/**
 * Created by btt_9 on 16/01/2017.
 */
let opera = function (evento) {
    $("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ");
}
$(document).ready(function () {
    $(document).keypress(opera);
    $(document).keydown(opera);
    $(document).keyup(opera);
});