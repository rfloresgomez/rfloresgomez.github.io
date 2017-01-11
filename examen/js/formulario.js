/**
 * Created by Roberto on 15/12/2016.
 */

{

    let nombre;
    let fecha;
    let dni;
    let check;
    let errorNombre;
    let errorFecha;
    let errorDni;
    let errorCheck;
    let botonNuevoEmpleado;
    let validaciones = [];

    let comprobarError = function (cajaError) {
        let validar = new Validar(this);
        cajaError.innerHTML = validar.comprobarVacio() || validar.comprobarPatron();
        if (this == fecha)
            cajaError.innerHTML = cajaError.innerHTML || validar.comprobarFecha();
        if (this == dni)
            cajaError.innerHTML = cajaError.innerHTML || validar.comprobarLetraDni();
        if (cajaError.innerHTML != "")
            validaciones.push(this);
    }

    let comprobarCheck = function (cajaError) {
        if (this.checked)
            cajaError.innerHTML = "";
        else {
            cajaError.innerHTML = "Debes aprobar las condiciones";
            validaciones.push(this);
        }
    }

    let comprobarTodo = function () {
        validaciones = [];
        comprobarError.bind(nombre, errorNombre)();
        comprobarError.bind(fecha, errorFecha)();
        comprobarError.bind(dni, errorDni)();
        comprobarCheck.bind(check, errorCheck)();
    }

    let limpiarFormulario = function(){
        nombre.value = "";
        fecha.value = "";
        dni.value = "";
        check.checked = false;
    }

    let crearEmpleado = function () {
        comprobarTodo();
        switch (validaciones.length) {
            case 0:
                let empleado = new Empleado(nombre.value, fecha.value, dni.value);
                empleado.crearNuevaVentana();
                limpiarFormulario();
                break;
            default:
                validaciones[0].focus();
        }
    }

    let init = function () {
        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        dni = document.getElementById("dni");
        check = document.getElementById("check");
        errorNombre = document.getElementById("errorNombre");
        errorFecha = document.getElementById("errorFecha");
        errorDni = document.getElementById("errorDni");
        errorCheck = document.getElementById("errorCheck");
        botonNuevoEmpleado = document.getElementById("boton");

        nombre.addEventListener("blur", comprobarError.bind(nombre, errorNombre));
        fecha.addEventListener("blur", comprobarError.bind(fecha, errorFecha));
        dni.addEventListener("blur", comprobarError.bind(dni, errorDni));
        check.addEventListener("blur", comprobarCheck.bind(check, errorCheck));
        botonNuevoEmpleado.addEventListener("click", crearEmpleado);
    }

    window.onload = init;
}