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
    let errorUsuario;
    let errorPass;
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


    let validarUsuario = function () {
        let patron = /^[\w\d-_]{5,}$/;
        if (!patron.test(usuario.value))
            errorUsuario.innerHTML = "Usuario no válido.";
        else
            errorUsuario.innerHTML = "";
    }

    let validarPass = function () {
        let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        ;
        if (!patron.test(pass.value))
            errorPass.innerHTML = "Contraseña no válida.";
        else
            errorPass.innerHTML = "";
    }

    let abrirNuevaVentana = function () {
        let nuevaVentana = window.open("", "segundaPag",
            "toolbar=no,resizable=no,width=300,height=300");
        nuevaVentana.document.write("<p>Usuario: "+getCookie("usuario")+"</p><p>Contraseña: "+getCookie("pass")+"</p>");
    }

    let comprobarErrores = function () {
        validarUsuario();
        validarPass();
        if (errorUsuario.textContent != "")
            usuario.focus();
        else if (errorPass.textContent != "")
            pass.focus();
        else {
            setCookie("usuario", usuario.value, 1);
            setCookie("pass", pass.value, 1);
            abrirNuevaVentana();
        }
    }

    let limpiarCookie = function () {
        setCookie("usuario", "", -1);
        setCookie("pass", "", -1);
        usuario.value = "";
        pass.value = "";
    }

    let comprobarCookie = function () {
        usuario.value = getCookie("usuario");
        pass.value = getCookie("pass");
    }

    let init = function () {
        usuario = document.getElementById("usuario");
        pass = document.getElementById("pass");
        errorPass = document.getElementById("errorPass");
        errorUsuario = document.getElementById("errorUsuario");
        enviar = document.getElementById("enviar");
        limpiar = document.getElementById("limpiar");

        usuario.addEventListener("focusout", validarUsuario);
        pass.addEventListener("focusout", validarPass);
        enviar.addEventListener("click", comprobarErrores);
        limpiar.addEventListener("click", limpiarCookie);

        comprobarCookie();
    }

    window.onload = init;
}