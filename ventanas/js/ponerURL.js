/**
 * Created by btt_9 on 31/10/2016.
 */
{
    let miPopup;

    function abrirVentana() {
        miPopup = window.open("about:blank", "miventana", "width=600,height=400,menubar=no");
    }

    function cerrarVentana() {
        miPopup.close();
    }

    function muestraURL() {
        if(miPopup==undefined)
            document.write("<h4>No se ha abierto una ventana hija</h4>");
        else
            miPopup.location = document.formulario.url.value;
    }
}