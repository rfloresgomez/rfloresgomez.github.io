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
    let ingles;
    let frances;
    let aleman;
    let polaco;
    let idiomas;
    let hombre;
    let mujer;
    let sexo;
    let cajas;

    let errorNombre;
    let errorApellidos;
    let errorDni;
    let errorEmail;
    let errorFecha;
    let errorTelefono;
    let errorCuenta;
    let errorUrl;
    let errorIdiomas;
    let errorSexo;
    let mensajes;

    let enviar;

    let comprobarLetraDni = function () {
        let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let numeroDni = dni.value.substr(0, 8);
        let letra = dni.value.substr(dni.value.length - 1, 1);
        if (letra.toUpperCase() != letrasDni[numeroDni % 23])
            return dni.id + " no coincide la letra.";
        else
            return "";
    }

    let comprobarCheck = function (array) {
        let vacio = true;
        let error;
        if (array == idiomas)
            error = errorIdiomas;
        else
            error = errorSexo;

        for (let i = 0; i < array.length; i++) {
            if (array[i].checked)
                vacio = false;
        }
        if (vacio)
            error.innerHTML = "Debes seleccionar alguno.";
        else
            error.innerHTML = "";
    }

    let comprobarError = function (error) {
        if (this == idiomas || this == sexo) {
            comprobarCheck(this);
        } else {
            let validar = new Validar(this);
            let mensaje = (validar.comprobarSiVacio() || validar.comprobarRegex());
            if (this == dni)
                mensaje = (mensaje || comprobarLetraDni())
            error.innerHTML = mensaje;
        }
    }

    let nuevaVentana = function () {
        let nuevaVentana = window.open("comunicacion2.html", "segundaPag",
            "toolbar=no,resizable=no,width=300,height=300");
        nuevaVentana.document.write("<h1>Formulario</h1><p>Nombre:" + nombre.value + "</p>" +
            "<p>Apellidos:" + apellidos.value + "</p><p>DNI:" + dni.value + "</p><p>Fecha de nacmiento:" + fecha.value + "</p>" +
            "<p>Teléfono:" + telefono.value + "</p><p>Cuenta:" + cuenta.value + "</p><p>URL:" + url.value + "</p>");
    }

    let comprobarErrores = function () {
        let errores = [];
        for (let i = 0; i < cajas.length; i++) {
            comprobarError.bind(cajas[i], mensajes[i])();
            if (mensajes[i].textContent != "") {
                errores.push(cajas[i]);
            }
        }
        if (errores.length > 0)
            errores[0].focus();
        else if (errores.length == 0)
            nuevaVentana();
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
        ingles = document.getElementById("ingles");
        frances = document.getElementById("frances");
        aleman = document.getElementById("aleman");
        polaco = document.getElementById("polaco");
        idiomas = [ingles, frances, aleman, polaco];
        hombre = document.getElementById("hombre");
        mujer = document.getElementById("mujer");
        sexo = document.getElementsByName("sexo");
        cajas = [nombre, apellidos, dni, email, fecha, telefono, cuenta, url, idiomas, sexo];

        errorNombre = document.getElementById("errorNombre");
        errorApellidos = document.getElementById("errorApellidos");
        errorEmail = document.getElementById("errorEmail");
        errorDni = document.getElementById("errorDni");
        errorFecha = document.getElementById("errorFecha");
        errorTelefono = document.getElementById("errorTelefono");
        errorCuenta = document.getElementById("errorCuenta");
        errorUrl = document.getElementById("errorUrl");
        errorIdiomas = document.getElementById("errorIdiomas");
        errorSexo = document.getElementById("errorSexo");
        mensajes = [errorNombre, errorApellidos, errorEmail, errorDni, errorFecha, errorTelefono, errorCuenta, errorUrl, errorIdiomas, errorSexo];

        enviar = document.getElementById("enviar");


        nombre.addEventListener("focusout", comprobarError.bind(nombre, errorNombre));
        apellidos.addEventListener("focusout", comprobarError.bind(apellidos, errorApellidos));
        email.addEventListener("focusout", comprobarError.bind(email, errorEmail));
        dni.addEventListener("focusout", comprobarError.bind(dni, errorDni));
        fecha.addEventListener("focusout", comprobarError.bind(fecha, errorFecha));
        telefono.addEventListener("focusout", comprobarError.bind(telefono, errorTelefono));
        cuenta.addEventListener("focusout", comprobarError.bind(cuenta, errorCuenta));
        url.addEventListener("focusout", comprobarError.bind(url, errorUrl));
        enviar.addEventListener("click", comprobarErrores);
    }

    window.onload = init;
}
