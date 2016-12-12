/**
 * Created by btt_9 on 12/12/2016.
 * Accede al elemento html
 * Accede al body mediante lastChild
 * Accede al head mediante la lista childNodes
 * Averigua el número de hijos de body (Actualiza el primer párrafo con esta información)
 * Añádele un párrafo con el texto "Hola a todos"
 * Añádele al principio del body una lista (<ol>) con los nombres de la pareja a la que perteneces.
 * Elimina el último párrafo del documento original ("párrafo DOM 3");
 */
{
    let init = function () {
        let html = document.documentElement;
        let body = html.lastChild;
        let head = html.childNodes[0];
        let parrafos = document.getElementsByTagName("p");
        let parrafoNuevo = document.createElement("p");
        parrafoNuevo.appendChild(document.createTextNode("Hay " + body.childNodes.length + " elementos en el body"));
        body.replaceChild(parrafoNuevo, parrafos[0]);
        let saludo = document.createElement("p");
        saludo.appendChild(document.createTextNode("Hola a todos"));
        body.appendChild(saludo);

        let lista = document.createElement("ol");
        let linea1 = document.createElement("li");
        linea1.appendChild(document.createTextNode("Roberto Carlos"));
        lista.appendChild(linea1);
        let linea2 = document.createElement("li");
        linea2.appendChild(document.createTextNode("Flores"));
        lista.appendChild(linea2);
        let linea3 = document.createElement("li");
        linea3.appendChild(document.createTextNode("Gómez"));
        lista.appendChild(linea3);
        body.insertBefore(lista, body.childNodes[0]);
        body.removeChild(parrafos[parrafos.length-2]);
    }
    window.onload = init;
}