/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function(){
    let tipi1 = $("#tip1");
    let tipi2 = $("#tip2");
    let elemento1 = $("#elemento1");
    let elemento2 = $("#elemento2");

    elemento1.mouseenter(function(e){
        tipi1.css("left", e.pageX + 5);
        tipi1.css("top", e.pageY + 5);
        tipi1.css("display", "block");
    });
    elemento1.mouseleave(function(e){
        tipi1.css("display", "none");
    });

    elemento2.mouseenter(function(e){
        tipi2.css("left", e.pageX + 5);
        tipi2.css("top", e.pageY + 5);
        tipi2.css("display", "block");
    });
    elemento2.mouseleave(function(e){
        tipi2.css("display", "none");
    });
})