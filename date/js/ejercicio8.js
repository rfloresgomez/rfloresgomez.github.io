/**
 * Created by btt_9 on 10/11/2016.
 */
{
    let calcularEdad = function (fecha) {
        try {
            if (fecha instanceof Date == false)
                throw 'InvalidValor. El valor introducido no es una fecha.';
            else {
                let anio = fecha.getFullYear();
                let mes = fecha.getMonth() + 1;
                let dia = fecha.getDay();
                let edad = (new Date().getFullYear()) - anio;

                if (edad < 0)
                    throw 'FechaInválida. No puedes introducir una fecha futura.';
                else if (edad === 0) {
                    let meses = (new Date().getMonth() - 1) - mes;
                    if (meses < 0)
                        throw 'FechaInválida. No puedes introducir una fecha futura.';
                    else {
                        let dias = (new Date().getDay()) - dia;
                        if (dias < 0)
                            throw 'FechaInválida. No puedes introducir una fecha futura.';
                        else
                            console.log('Tienes ' + meses + ' y ' + dias + ' días.');
                    }
                } else {
                    if ((new Date().getMonth() - 1) > mes || ((new Date().getMonth() - 1) == mes && (new Date().getDay() >= dia)))
                        console.log('Tienes ' + (edad -1) + ' años.');
                    else
                        console.log('Tienes ' + edad + ' años.');
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    let init = function () {
        calcularEdad(1994, 9, 29);
        calcularEdad(new Date("29 Septiembre, 1994 12:32:00"));
        calcularEdad(new Date("9 Septiembre, 2016 12:32:00"));
        calcularEdad(new Date("29 Noviembre, 1994 12:32:00"));
    }

    window.onload = init();
}