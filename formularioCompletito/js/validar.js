/**
 * Created by btt_9 on 01/12/2016.
 */

let Expresiones = function () {
    Expresiones.prototype.expresiones = {
        'nombre': /^[A-Z][a-z]{2,}(\s[A-z]*)?$/,
        'apellidos': /^[A-Z][a-z]{2,}(\s[A-z]*)?$/,
        'email': /^[a-z]+(\.[a-z]*)?@[a-z]*\.(com|es)$/,
        'dni': /^\d{8}[\s-]?[A-z]$/,
        'fecha': /^\d{2}[/\s-]\d{2}[/\s-]\d{4}$/,
        'telefono': /^\d{9}$/,
        'cuenta': /^\d{4}(-)?\d{4}(\1)\d{2}(\1)\d{10}$/,
        'url': /^(http:\/\/|https:\/\/)?(www.)?[\w\d]*(.com|.es|.org|.edu){1}$/
    };
    Expresiones.prototype.errores = {
        'nombre': 'Debe empezar por mayúscula y un mínimo de 3 letras.',
        'apellidos': 'Debe empezar por mayúscula y un mínimo de 3 letras.',
        'email': 'Debe cumplir el patrón: usuario@correo.com/.es.',
        'dni': '8 números seguidos de una letra, separados o no por espacio o guión.',
        'fecha': 'La fecha tiene cumplir el patrón: xx/xx/xxxx separado por barras, guiones o espacios.',
        'telefono': 'El teléfono debe contener 9 dígitos.',
        'cuenta': 'La cuenta tiene que cumplir el patrón: xxxx-xxxx-xx-xxxxxxxxxx separado o no por guiones.',
        'url': 'La url tiene que tener que cumplir el patrón: http://www.ejemplo.es.'
    };

    Expresiones.prototype.getExpresionError = function (indice) {
        return [Expresiones.prototype.expresiones[indice], Expresiones.prototype.errores[indice]];
    };
}

let expresiones = new Expresiones();

class Validar {

    constructor(obj) {
        this.obj = obj;
        this.patron = expresiones.getExpresionError(obj.id)[0];
        this.error = expresiones.getExpresionError(obj.id)[1];
    }

    comprobarRegex() {
        if (!this.patron.test(this.obj.value))
            return this.error;
        else
            return "";
    }

    comprobarSiVacio() {
        if (this.obj.value.length == 0)
            return this.obj.id + " no puede estar vacío."
        else
            return "";
    }
}
