/**
 * Created by btt_9 on 10/11/2016.
 */
{
    let esBisiesto = function (valor) {
        try {
            if (valor instanceof Date == false)
                throw 'InvalidValor. El valor introducido no es una fecha.';
            else {
                let anio = valor.getFullYear();
                if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
                    console.log(anio + ' es un año bisiesto.');
                else
                    console.log(anio + ' no es un año bisiesto.');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    let init = function () {
        esBisiesto("vdv");
        esBisiesto(new Date());
        esBisiesto(new Date(2015, 2, 2));
        esBisiesto(new Date(2020, 2, 2));
    }

    window.onload = init();
}