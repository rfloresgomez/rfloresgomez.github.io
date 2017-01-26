/**
 * Created by btt_9 on 16/01/2017.
 */
$(document).ready(function () {
    $(document).mousemove(function(e){
        $("h1").html("X: "+e.pageX+ " Y: "+e.pageY);
    });
});