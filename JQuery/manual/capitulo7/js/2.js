/**
 * Created by btt_9 on 19/01/2017.
 */
jQuery.fn.cuentaCaracteres = function () {
    this.each(function () {
        let elem = $(this);
        let contador = $('<div>Contador de caracteres: ' + elem.val().length + '</div>');
        elem.after(contador);
        elem.data("campocontador", contador);

        elem.keyup(function () {
            let elem = $(this);
            let campocontador = elem.data("campocontador");
            campocontador.text('Contador de caracteres: ' + elem.val().length);
        });
    });
    return this;
};

$(document).ready(function () {
    $("textarea").cuentaCaracteres();
});