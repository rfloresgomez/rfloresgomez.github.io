/**
 * Created by btt_9 on 12/01/2017.
 */
$(document).ready(function(){
    $("#enlaceajax").click(function (evento){
       $("#destino").load("recibe-parametros.php", {nombre: "Roberto", edad: 21}, function(){
          alert("recibidos los datos.");
       });
    });
});