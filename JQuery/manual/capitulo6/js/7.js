/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function(){
    $("#mitexto").keypress(function(e){
        e.preventDefault();
        $("#loescrito").html(e.which + ": " + String.fromCharCode(e.which))
    });
})