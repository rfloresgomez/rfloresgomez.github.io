{

    let crearFecha = function(){
        let dia = pedirNumeroEntero('Dime el día:');
        let mes = pedirNumeroEntero('Dime el mes:');
        let anio = pedirNumeroEntero('Dime el año:');
        fecha = new Date(anio, mes, dia);
        console.log(fecha);
    }


    let pedirNumeroEntero = function (mensaje) {
        let entero;
        do {
            entero = prompt(mensaje);
        } while (entero != parseInt(entero).toFixed());
        return parseInt(entero);
    }

    crearFecha();

}
