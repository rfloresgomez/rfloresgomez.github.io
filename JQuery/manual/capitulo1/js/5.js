/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function () {
    $("#mayoria_edad").click(function (evento) {
        if ($("#mayoria_edad").prop("checked")) {
            $("#formulariomayores").css("display", "block");
        } else {
            $("#formulariomayores").css("display", "none");
        }
    });
});