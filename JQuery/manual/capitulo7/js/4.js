/**
 * Created by btt_9 on 19/01/2017.
 */
jQuery.fn.miPlugin = function() {

    //variables que son comunes a todos los elementos
    //que había en el objeto jQuery que recibe el método del plugin
    let mivariableComun = "comun";
    alert("Nueva invocación de plugin. Mi variable común: " + mivariableComun)

    this.each(function(){
        //CÓDIGO DEL PLUGIN

        //Elemento sobre el que itero y estoy aplicando el plugin
        let elem = $(this);
        //elem es una variable global al plugin

        //variables y funciones específicos para cada elemento
        let miVariable = "x";
        //miVariable se podrá acceder dentro de todo el código que pongamos aquí

        //funcion que será accesible desde cualquier parte del plugin
        function miFuncion(){
            //puedo acceder a variables del plugin
            let miVariable = elem.text();

            //Muestro el contenido de la variable
            alert("mi variable local y particular de cada plugin: " + miVariable);

            //cambio la variable comun a todos los elementos de este plugin
            let mivariableComun = "Otra cosa comun!"
        }

        //puedo invocar las funciones del plugin
        miFuncion();

        //evento, que tiene una función. dentro de ella puedo acceder a las variables y funciones
        elem.click(function(){
            //puedo acceder a variables del plugin
            alert("Dentro del evento: " + miVariable);

            //puedo acceder a funciones
            miFuncion();
        });

    });
};

$(document).ready(function(){
    $("#esteDiv").miPlugin();
    $(".misspan").miPlugin();
});