/**
 * Created by btt_9 on 14/11/2016.
 */
{
    let init = function () {
        document.body.innerHTML += "<ol>" +
            "<li>window.outerHeight: Obtiene el alto en pixeles de la ventana del navegador por completo=>" + window.outerHeight + "</li>" +
            "<li>window.innerHeight: Altura (en píxeles) de la ventana ventana del navegador=>" + window.innerHeight + "</li>" +
            "<li>window.screen.availHeight: Obtiene el total de espacio vertical disponible en la pantalla=>" + window.screen.availHeight + "</li>" +
            "<li>window.screen.height: Obtiene el ancho de la pantalla en pixel=>" + window.screen.height + "</li>" +
            "<li>window.document.clientHeight: Devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen=>" + window.document.body.clientHeight + "</li>" +
            "</ol>";
    }

    window.onload = init();
}