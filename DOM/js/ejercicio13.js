/**
 * Created by btt_9 on 19/10/2016.
 */
function anade() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Elemento de prueba");
    elemento.appendChild(texto);
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
    var nuevoElemento = "<li>Texto de prueba</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
}
