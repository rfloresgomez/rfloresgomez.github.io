/**
 * Created by btt_9 on 06/11/2016.
 */
{
    var nuevaVentana;
    function abrirNuevaVentana() {
        nuevaVentana = window.open("", "segundaPag",
            "width=300,height=200");
        nuevaVentana.document.write("<html>" +
            "<head>" +
            "<title>Nueva ventana</title>" +
            "</head>" +
            "<body>" +
            "<p>Se han utilizado las propiedades:</p>" +
            "<ul><li>width="+nuevaVentana.innerWidth+"</li><li>height="+nuevaVentana.innerHeight+"</li></ul>" +
            "</body>" +
            "</html>");
    }

     let init = function(){
        let abrir = document.getElementById('abrir');
        abrir.addEventListener("click", abrirNuevaVentana);
    }

    window.onload = init;
}
