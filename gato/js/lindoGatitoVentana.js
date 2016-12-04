/**
 * Created by btt_9 on 20/11/2016.
 */
{
    let gato;
    let comer;
    let dormir;
    let edad;
    let jugar;
    let datos;
    let anios;

    let mostrarDatos = function () {
        datos.innerHTML = "<ul>" +
            "<li>Nombre: " + gato.nombre + "</li>" +
            "<li>Fecha de nacimiento: " + gato.getFechaNacimiento() + "</li>" +
            "<li>Peso: " + gato.getPeso() + " Kg</li>" +
            "<li>Raza: " + gato.raza + "</li>" +
            "<li>Estado: " + gato.estado + "</li>" +
            "<li>Ánimo: " + gato.getAnimo() + "</li>" +
            "</ul>";
    }

    let desactivarBotones = function () {
        comer.disabled = true;
        dormir.disabled = true;
        edad.disabled = true;
        jugar.disabled = true;
    }

    let darDeComer = function () {
        gato.comer();
        mostrarDatos();
        if (gato.isMuerto())
            desactivarBotones();
    }

    let dormirGato = function () {
        gato.dormir();
        mostrarDatos();
        if (gato.isMuerto())
            desactivarBotones();
    }

    let jugarGato = function () {
        gato.jugar();
        mostrarDatos();
        if (gato.isMuerto())
            desactivarBotones();
    }

    let calcularEdad = function () {

    }

    let init = function () {

        gato = window.opener.getGato();
        comer = document.getElementById("comer");
        dormir = document.getElementById("dormir");
        edad = document.getElementById("edad");
        jugar = document.getElementById("jugar");
        datos = document.getElementById("datos");
        anios = document.getElementById("anios");

        mostrarDatos();
        comer.addEventListener("click", darDeComer);
        dormir.addEventListener("click", dormirGato);
        edad.addEventListener("click", calcularEdad);
        jugar.addEventListener("click", jugarGato);

    }

    window.onload = init;
}
