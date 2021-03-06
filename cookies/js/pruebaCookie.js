/**
 * Created by btt_9 on 05/12/2016.
 * Crea una página debidamente diseñada que solicite el nombre del usuario y la contraseña. Si existiera alguna cookie almacenada, mostraría sus datos.
 * Dispondrá además de los siguientes botones:

 * Botón limpiar para borrar los datos (también borrará la cookie)
 * Botón entrar para entrar en el sitio.
 * Al activar entrar validará los datos.

 * El nombre del usuario ha de tener un mínimo de 5 caracteres, puede contener números o letras ( mayúsculas o minúsculas), guiones o subrayados
 * La contraseña ha de ser lo suficientemente robusta. Tendrá un mínimo de 6 caracteres y ha de tener al menos un dígito, una letra y un carácter especial ($%@#)
 * En el caso en que el nombre del usario o la contraseña no sean válidos, devolverá el foco a la caja de texto en cuestión con un mensaje de error en la propia caja. Si todo va bien, abre una nueva ventana con los datos leídos desde la cookie.
 */
{
    let usuario;
    let pass;
    let cajas;

    let errorUsuario;
    let errorPass;
    let mensajes;

    let enviar;
    let limpiar;

    let setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    let getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let comprobarError = function (error) {
        let validar = new Validar(this);
            let mensaje = (validar.comprobarSiVacio() || validar.comprobarRegex());
            error.innerHTML = mensaje;
    }

    let abrirNuevaVentana = function () {
        let nuevaVentana = window.open("", "segundaPag",
            "toolbar=no,resizable=no,width=300,height=300");
        nuevaVentana.document.write("<p>Usuario: "+getCookie("usuario")+"</p><p>Contraseña: "+getCookie("pass")+"</p>");
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
        else if (errores.length == 0) {
            setCookie("usuario", usuario.value, 1);
            setCookie("pass", pass.value, 1);
            abrirNuevaVentana();
        }
    }

    let limpiarCajas = function () {
        for(let i=0; i<cajas.length; i++) {
            cajas[i].value = "";
            mensajes[i].innerHTML = "";
        }
    }

    let limpiarCookie = function () {
        setCookie("usuario", "", -1);
        setCookie("pass", "", -1);
        limpiarCajas();
    }

    let comprobarCookie = function () {
        usuario.value = getCookie("usuario");
        pass.value = getCookie("pass");
    }

    let init = function () {
        usuario = document.getElementById("usuario");
        pass = document.getElementById("pass");
        cajas = [usuario, pass];

        errorPass = document.getElementById("errorPass");
        errorUsuario = document.getElementById("errorUsuario");
        mensajes = [errorUsuario, errorPass];

        enviar = document.getElementById("enviar");
        limpiar = document.getElementById("limpiar");

        usuario.addEventListener("focusout", comprobarError.bind(usuario, errorUsuario));
        pass.addEventListener("focusout", comprobarError.bind(pass, errorPass));
        enviar.addEventListener("click", comprobarErrores);
        limpiar.addEventListener("click", limpiarCookie);

        comprobarCookie();
    }

    window.onload = init;
}