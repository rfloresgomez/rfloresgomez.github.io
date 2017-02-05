$(document).ready(function () {
    $("#imagenes li").mouseover(function () {
        $(this).css({
                    "opacity": "1",
                    "cursor": "pointer"});
    });

    $("#imagenes li").mouseout(function () {
        $(this).css("opacity", "0.5");
    });

    $("#imagenes img").click(function () {
        let url = $(this).attr("src");
        $("#principalGaleria img").fadeOut(300, function () {
            $("#principalGaleria img").attr("src", url);
            $("#principalGaleria img").fadeIn(500);
        });
    });
});