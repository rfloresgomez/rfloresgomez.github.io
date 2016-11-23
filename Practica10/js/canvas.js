/**
 * Created by btt_9 on 22/11/2016.
 */

//Devueve el contexto del canvas o FALSE si no ha podido conseguise
function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        var contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return FALSE;
}

var contexto;

window.onload = function () {
    //Recibimos el elemento canvas
    contexto = cargaContextoCanvas('micanvas');
    //Comprobación sobre si encontramos un elemento
    //y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
    if(contexto){
        //primer camino
        contexto.fillStyle = '#9D938A';
        contexto.beginPath();
        contexto.moveTo(10,70);
        contexto.lineTo(10,10);
        contexto.lineTo(40,10);
        contexto.lineTo(40,30);
        contexto.lineTo(70,30);
        contexto.lineTo(70,10);
        contexto.lineTo(100,10);
        contexto.lineTo(100,30);
        contexto.lineTo(130,30);
        contexto.lineTo(130,10);
        contexto.lineTo(160,10);
        contexto.lineTo(160,30);
        contexto.lineTo(190,30);
        contexto.lineTo(190,10);
        contexto.lineTo(220,10);
        contexto.lineTo(220,30);
        contexto.lineTo(250,30);
        contexto.lineTo(250,10);
        contexto.lineTo(280,10);
        contexto.lineTo(280,30);
        contexto.lineTo(310,30);
        contexto.lineTo(310,10);
        contexto.lineTo(340,10);
        contexto.lineTo(340,70);
        contexto.lineTo(10,70);
        contexto.fill();

        contexto.strokeStyle = '#000';
        contexto.beginPath();
        contexto.strokeRect(10,10,30,10);
        contexto.strokeRect(10,20,15,10);
        contexto.strokeRect(25,20,15,10);
        contexto.strokeRect(10,30,15,20);
        contexto.strokeRect(25,30,30,20);
        contexto.strokeRect(10,50,30,20);
        contexto.strokeRect(55,30,30,20);
        contexto.strokeRect(85,30,30,20);
        contexto.strokeRect(115,30,30,20);
        contexto.strokeRect(145,30,30,20);
        contexto.strokeRect(175,30,30,20);
        contexto.strokeRect(205,30,30,20);
        contexto.strokeRect(235,30,30,20);
        contexto.strokeRect(265,30,30,20);
        contexto.strokeRect(295,30,30,20);
        contexto.strokeRect(325,30,15,20);
        contexto.strokeRect(40,50,30,20);
        contexto.strokeRect(70,50,30,20);
        contexto.strokeRect(100,50,30,20);
        contexto.strokeRect(130,50,30,20);
        contexto.strokeRect(160,50,30,20);
        contexto.strokeRect(190,50,30,20);
        contexto.strokeRect(220,50,30,20);
        contexto.strokeRect(250,50,30,20);
        contexto.strokeRect(280,50,30,20);
        contexto.strokeRect(310,50,30,20);
        contexto.strokeRect(70,10,30,10);
        contexto.strokeRect(70,20,15,10);
        contexto.strokeRect(85,20,15,10);
        contexto.strokeRect(130,10,30,10);
        contexto.strokeRect(130,20,15,10);
        contexto.strokeRect(145,20,15,10);
        contexto.strokeRect(190,10,30,10);
        contexto.strokeRect(190,20,15,10);
        contexto.strokeRect(205,20,15,10);
        contexto.strokeRect(250,10,30,10);
        contexto.strokeRect(250,20,15,10);
        contexto.strokeRect(265,20,15,10);
        contexto.strokeRect(310,10,30,10);
        contexto.strokeRect(310,20,15,10);
        contexto.strokeRect(325,20,15,10);
        contexto.stroke();
    }
}