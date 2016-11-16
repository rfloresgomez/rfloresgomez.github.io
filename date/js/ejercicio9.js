/**
 * Created by btt_9 on 10/11/2016.
 */
{
    let calcularHastaFinDeAnio = function () {;
        let hoy = new Date();
        let finDeAño = new Date("31 Diciembre, 2016");

        let dias = finDeAño.getMilliseconds()-hoy.getMilliseconds();

        console.log(dias);
    }

    let init = function () {
        calcularHastaFinDeAnio();
    }

    window.onload = init();
}