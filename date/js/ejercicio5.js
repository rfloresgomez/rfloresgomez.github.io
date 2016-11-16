/**
 * Created by btt_9 on 10/11/2016.
 */
{
    let incrementaDias = function (incremento, dia, mes, anio) {
        let fecha = new Date(anio, mes-1, dia+incremento);
        console.log(fecha.toLocaleDateString("es-ES"));
    }

    let init = function () {
        incrementaDias(5, 29, 9, 1994);
        incrementaDias(-5, 29, 9, 1994);
        incrementaDias(5, 29, 12, 2016);
    }

    window.onload = init();
}
