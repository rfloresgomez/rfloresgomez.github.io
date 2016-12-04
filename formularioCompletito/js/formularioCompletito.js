/**
 * Created by btt_9 on 01/12/2016.
 */
{
    let nombre;
    let apellidos;
    let dni;
    let email;
    let fecha;
    let telefono;
    let cuenta;
    let url;
    let errorNombre;
    let errorApellidos;
    let errorDni;
    let errorEmail;
    let errorFecha;
    let errorTelefono;
    let errorCuenta;
    let errorUrl;

    let comprobarLetraDni = function () {
        let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let numeroDni = dni.value.substr(0, 8);
        let letra = dni.value.substr(dni.value.length - 1, 1);
        if (letra.toUpperCase() != letrasDni[numeroDni % 23])
            return dni.id + " no coincide la letra.";
        else
            return "";
    }

    let comprobarError = function (error) {
        let validar = new Validar(this);
        let mensaje = (validar.comprobarSiVacio() || validar.comprobarRegex());
        if(this==dni)
            mensaje = (mensaje || comprobarLetraDni())
        error.innerHTML = mensaje;
    }
    let init = function () {
        nombre = document.getElementById("nombre");
        apellidos = document.getElementById("apellidos");
        dni = document.getElementById("dni");
        email = document.getElementById("email");
        fecha = document.getElementById("fecha");
        telefono = document.getElementById("telefono");
        cuenta = document.getElementById("cuenta");
        url = document.getElementById("url");
        errorNombre = document.getElementById("errorNombre");
        errorApellidos = document.getElementById("errorApellidos");
        errorEmail = document.getElementById("errorEmail");
        errorDni = document.getElementById("errorDni");
        errorFecha = document.getElementById("errorFecha");
        errorTelefono = document.getElementById("errorTelefono");
        errorCuenta = document.getElementById("errorCuenta");
        errorUrl = document.getElementById("errorUrl");


        nombre.addEventListener("focusout", comprobarError.bind(nombre, errorNombre));
        apellidos.addEventListener("focusout", comprobarError.bind(apellidos, errorApellidos));
        email.addEventListener("focusout", comprobarError.bind(email, errorEmail));
        dni.addEventListener("focusout", comprobarError.bind(dni, errorDni));
        fecha.addEventListener("focusout", comprobarError.bind(fecha, errorFecha));
        telefono.addEventListener("focusout", comprobarError.bind(telefono, errorTelefono));
        cuenta.addEventListener("focusout", comprobarError.bind(cuenta, errorCuenta));
        url.addEventListener("focusout", comprobarError.bind(url, errorUrl));
    }

    window.onload = init;
}
