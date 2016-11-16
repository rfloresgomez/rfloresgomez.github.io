/**
 * Created by btt_9 on 10/11/2016.
 */
{

    let diaDeLaSemana = function (fecha) {
        let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        if (fecha instanceof Date)
            return dias[fecha.getDay()];

        return dias[new Date().getDay()];

    }

    let init = function () {
        console.log('Si le pasamos un argumento que no es una fecha, nos da el día de hoy. diaDeLaSemana("hoy"): ' + diaDeLaSemana("hoy"));
        console.log('Si le pasamos una fecha, nos da el día de esa fecha. diaDeLaSemana(new Date(2016, 10, 12)): ' + diaDeLaSemana(new Date(2016, 10, 12)));
    }

    window.onload = init();
}
