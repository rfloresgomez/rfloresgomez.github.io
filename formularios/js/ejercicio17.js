/**
 * Realizado por Roberto Carlos Flores Gómez
 */
{
    const maximo = 30;

    let init = function () {
        let texto = document.getElementById('texto');
        texto.addEventListener("focus", comprobarCaracteresRestantes, false);
        texto.addEventListener("keypress", limita, false);
        texto.addEventListener("keyup", comprobarCaracteresRestantes, false);
        texto.addEventListener("keydown", comprobarCaracteresRestantes, false);
    }

    let limita = function (evento) {
        let teclado = evento || window.event;
        let tecla = teclado.charCode || teclado.keyCode;
        let elemento = document.getElementById("texto");
            //flechashorizontales       | retroceso     |suprimir.
        if (tecla == 37 || tecla == 39 || tecla == 8 || tecla == 46) {
            return true;
        }

        if (elemento.value.length >= maximo) {
            evento.preventDefault();
        }
    }
    let comprobarCaracteresRestantes = function () {
        let textArea = document.getElementById("texto");
        let caracteresRestantes = maximo - textArea.value.length;
        document.getElementById("caracteresRestantes").innerHTML =
            'Te quedan ' + caracteresRestantes;
    }

    window.onload = init;
}