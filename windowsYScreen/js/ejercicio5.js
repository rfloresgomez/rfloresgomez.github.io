/**
 * Created by btt_9 on 16/11/2016.
 * Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 */
{
    let init = function () {
        let contenido = document.getElementById("contenido");
        let mostrarHora = function(){
            let hora = new Date();
            contenido.innerHTML= hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
        }
        window.setInterval(function(){mostrarHora()}, 1000);
    }
    window.onload = init;
}
