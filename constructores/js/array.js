/**
 * Created by btt_9 on 16/11/2016.
 * Extender el objeto Array para que permita añadir nuevos elementos al final del array:
 * Incluir la opción de controlar si se permiten elementos duplicados o no:
 */
Array.prototype.comprobarSiExiste = function (elemento) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === elemento)
            return true;
        return false;
    }
}

Array.prototype.anadir = function (elemento, permitir) {
    let permitir = (permitir == null) ? true : permitir;
    if (!permitir) {
        if (!this.comprobarSiExiste(elemento))
            this[this.length] = elemento;
    } else
        this[this.length] = elemento;
}

{
    let array = [];

    let init = function () {
        let elemento = document.getElementById("elemento");
        let permitir = document.getElementById("permitir");
        let annadir = document.getElementById("annadir");
        let contenedor = document.getElementById("contenedor");

        annadir.addEventListener("click", annadirAlArray);

    }

    let mostrarArray = function () {
        let mensaje = "";
        for (elem of array)
            mensaje += " " + elem;
        return mensaje;
    }

    let annadirAlArray = function () {
        array.anadir(elemento.value, permitir.checked);
        contenedor.innerHTML = "Array:" + mostrarArray();
    }



    window.onload = init;
}

