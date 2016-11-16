/**
 * Created by btt_9 on 16/11/2016.
 * Mi URL. Crea una página que te muestre debidamente desglosada la url.
 * (servidor, protocolo, ruta...)
 *
 */
{
    let init = function () {
        let contenido = document.getElementById("contenido");
        let url = document.location;
        contenido.innerHTML = "Servidor: " + url.hostname +
            "<br/>Protocolo: " + url.protocol +
            "<br/>Ruta: " + url.href +
            "<br/>Puerto " + url.port +
            "<br/>Path: " + url.pathname;
    }

    window.onload = init;
}
