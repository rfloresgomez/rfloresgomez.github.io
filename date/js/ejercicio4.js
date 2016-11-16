/**
 * Created by btt_9 on 10/11/2016.
 */
{
    let isFecha = function (valor) {
        return valor instanceof Date;
    }   
    
    let init = function (){
        console.log('isFecha(new Date()): '+isFecha(new Date()));
        console.log('isFecha("fecha"): '+isFecha("fecha"));
    }

    window.onload = init();
}
