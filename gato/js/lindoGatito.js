/**
 * Created by btt_9 on 18/11/2016.
 * Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
 * Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
 * Evita las cajas de texto
 * No puedes usar ni alert ni prompt
 * Hazlo lo más dinámico posible.
 * Utiliza prototype para los métodos
 */
{
    var gato;
    let nombre;
    let fechaNac;
    let peso;
    let raza;
    let crearGato;
    let error;
    let estado = ["Jugando", "Durmiendo", "Comiendo", "Muerto"];

    Gato.prototype.setPeso = function (peso) {
        if (peso < 1 || peso > 15)
            this.estado = estado[3];
        this.peso = peso;
    }

    Gato.prototype.setAnimo = function (animo) {
        this.animo = animo;
        if (this.animo < 1 || this.animo > 10)
            this.estado = estado[3];
    }

    Gato.prototype.getAnimo = function () {
        return this.animo;
    }

    Gato.prototype.getPeso = function () {
        return this.peso;
    }

    Gato.prototype.aumentarAnimo = function () {
        this.setAnimo(this.getAnimo() + 1);
    }

    Gato.prototype.disminuirAnimo = function () {
        this.setAnimo(this.getAnimo() - 1);
    }

    Gato.prototype.jugar = function () {
        this.estado = estado[0];
        this.aumentarAnimo();
        this.setPeso(this.getPeso() - 1);

    }

    Gato.prototype.dormir = function () {
        this.estado = estado[1];
        this.disminuirAnimo();
    }

    Gato.prototype.comer = function () {
        this.estado = estado[2];
        this.aumentarAnimo();
        this.setPeso(this.getPeso() + 1);
    }

    var getGato = function () {
        return gato;
    }

    Gato.prototype.getFechaNacimiento = function () {
        return this.fechaNacimento;
    }

    Gato.prototype.isMuerto = function () {
        if (this.estado == estado[3])
            return true;
        return false;
    }

    function Gato(nombre, fecha, raza, peso) {
        this.nombre = nombre;
        this.fechaNacimento = fecha;
        this.raza = raza;
        this.peso = peso;
        this.estado = estado[0];
        this.animo = 5;
    }

    let nuevoGato = function () {
        if (parseInt(peso.value) < 1 || parseInt(peso.value) > 15 || nombre.value.trim().length == 0 || raza.value.trim().length == 0)
            error.innerHTML = "Error de entrada de datos (Peso, nombre o raza inválido).";
        else {
            error.innerHTML = "";
            gato = new Gato(nombre.value, fechaNac.value, raza.value, parseInt(peso.value));
            let ventana = window.open("lindoGatito.html", "", "top=0,left=0");
        }
    }

    let init = function () {
        nombre = document.getElementById("nombre");
        fechaNac = document.getElementById("nacimiento");
        peso = document.getElementById("peso");
        raza = document.getElementById("raza");
        crearGato = document.getElementById("crearGato");
        error = document.getElementById("error");

        crearGato.addEventListener("click", nuevoGato);
    }
    window.onload = init;
}