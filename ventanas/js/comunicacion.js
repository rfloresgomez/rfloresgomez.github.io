/**
 * Created by btt_9 on 02/11/2016.
 */
{
    let nuevaVentana = window.open("comunicacion2.html",  "segundaPag",
        "toolbar=no,resizable=no,width=300,height=300");

    function devolverTexto() {
        nuevaVentana.document.write("<h1>Hola "+document.formulario.texto.value+"!</h1><p>Mucha suerte con Lourdes.</p>");
        //nuevaVentana.document.mostrar.value = document.formulario.texto.value;
        //console.log(document.formulario.texto.value);
    }
}
