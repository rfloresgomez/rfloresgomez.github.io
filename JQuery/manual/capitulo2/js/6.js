/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function () {
    $("div").each(function (i) {
        let elemento = $(this);
        if (elemento.html() == "white") {
            return true;
        }
        if (elemento.html() == "nada") {
            return false;
        }
        elemento.css("color", elemento.html());
    });
});